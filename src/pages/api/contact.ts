import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

// ============================================================
// CONTACT FORM API
//
// By default, messages are saved to /messages/contact_messages.json
// This works with ZERO configuration.
//
// TO ENABLE EMAIL: fill in SMTP_* env variables in .env.local
// ============================================================

type Data = { success: boolean; message?: string; error?: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' })
  }

  const entry = {
    id: Date.now(),
    name,
    email,
    subject: subject || '(no subject)',
    message,
    receivedAt: new Date().toISOString(),
  }

  // ── Save to local JSON file (always works, no config needed) ──
  try {
    const dir = path.join(process.cwd(), 'messages')
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    const file = path.join(dir, 'contact_messages.json')
    const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []
    existing.push(entry)
    fs.writeFileSync(file, JSON.stringify(existing, null, 2))
    console.log('📬 New contact message saved:', entry)
  } catch (err) {
    console.error('Failed to save message:', err)
  }

  // ── Optional: Send email via SMTP ──
  // To enable, add these to .env.local:
  //   SMTP_HOST=smtp.gmail.com
  //   SMTP_PORT=587
  //   SMTP_USER=your@gmail.com
  //   SMTP_PASS=your_app_password
  //   CONTACT_TO=veerpawar3123@gmail.com

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO || 'veerpawar3123@gmail.com',
        subject: `Portfolio: ${subject || 'New message'} — from ${name}`,
        html: `
          <div style="font-family:monospace;background:#080B14;color:#E8EAF0;padding:24px;border-radius:12px;">
            <h2 style="color:#00D4FF;">New Portfolio Contact</h2>
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${subject || '—'}</p>
            <hr style="border-color:#1F2937;margin:16px 0;" />
            <p style="white-space:pre-wrap;">${message}</p>
            <hr style="border-color:#1F2937;margin:16px 0;" />
            <p style="color:#6B7280;font-size:12px;">Received: ${entry.receivedAt}</p>
          </div>
        `,
      })
    } catch (err) {
      console.error('Email send failed:', err)
      // Still return success since we saved to file
    }
  }

  return res.status(200).json({ success: true, message: 'Message received!' })
}
