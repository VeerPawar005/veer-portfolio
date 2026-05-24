# Veer Pawar — AI Engineer Portfolio

A production-grade, premium portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start (Run Locally in 3 Steps)

### Prerequisites
- Node.js 18+ installed → https://nodejs.org/
- npm or yarn

### Step 1: Install Dependencies
```bash
cd veer-pawar-portfolio
npm install
```

### Step 2: Add Your Resume PDF
Copy your resume PDF to:
```
public/Veer_Pawar_Resume_2026.pdf
```
Replace the placeholder `.txt` file already there.

### Step 3: Start Development Server
```bash
npm run dev
```

Open http://localhost:3000 — done! ✅

---

## 📁 Project Structure

```
veer-pawar-portfolio/
├── public/
│   └── Veer_Pawar_Resume_2026.pdf    ← PUT YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx              ← Hero section
│   │   │   ├── About.tsx             ← About section
│   │   │   ├── Skills.tsx            ← Skills grid
│   │   │   ├── Experience.tsx        ← Work experience
│   │   │   ├── Projects.tsx          ← Project cards
│   │   │   ├── Certifications.tsx    ← Certs + Education
│   │   │   └── Contact.tsx           ← Contact form
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── ParticleBackground.tsx
│   │   └── CursorAndProgress.tsx
│   ├── lib/
│   │   └── data.ts                   ← ALL CONTENT — edit here
│   ├── pages/
│   │   ├── api/
│   │   │   └── contact.ts            ← Contact form API
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles/
│       └── globals.css
├── messages/                         ← Auto-created, stores contact form submissions
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── .env.example
```

---

## ✏️ Customization

### Update All Content
Edit one file: **`src/lib/data.ts`**

This contains:
- Personal info (name, email, links, bio)
- Skills categories
- Experience / internship details
- Projects (add/remove/edit)
- Certifications
- Education

### Update Social Links
In `src/lib/data.ts`, update:
```ts
export const personalInfo = {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  email: 'your@email.com',
  phone: '+91 XXXXX XXXXX',
  ...
}
```

---

## 📬 Contact Form

The contact form works out of the box with **zero configuration**.

Messages are saved to: `messages/contact_messages.json`

### Optional: Enable Email Notifications
Create `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_TO=veerpawar3123@gmail.com
```

Get Gmail App Password: https://support.google.com/mail/answer/185833

---

## ☁️ Deploy to Vercel (Free)

### Option A: CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts — done in 2 minutes.

### Option B: GitHub + Vercel Dashboard
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import your repo
4. Click Deploy

### Add Environment Variables on Vercel
Vercel Dashboard → Project → Settings → Environment Variables
Add your SMTP vars if you want email notifications.

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#080B14` |
| Surface | `#0D1120` |
| Accent (Cyan) | `#00D4FF` |
| Accent-2 (Purple) | `#7B61FF` |
| Accent-3 (Green) | `#00FF9D` |
| Font | Syne + JetBrains Mono |

---

## 🛠️ Tech Stack

- **Next.js 14** — React framework with pages router
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **react-type-animation** — Typing effect in hero
- **react-intersection-observer** — Scroll-triggered animations
- **react-hot-toast** — Toast notifications
- **react-icons** — Icon library
- **nodemailer** — Optional email via SMTP

---

## ❓ Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Module not found errors?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Fonts not loading?**
Check your internet connection — Google Fonts loads at runtime.

---

Built by Veer Pawar · AI Engineer
