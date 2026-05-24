'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '@/lib/data'
import toast from 'react-hot-toast'
import { HiMail, HiPhone, HiLocationMarker, HiExternalLink, HiPaperAirplane } from 'react-icons/hi'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all required fields.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        toast.success('Message sent! I\'ll get back to you soon.')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error(data.error || 'Failed to send. Please email me directly.')
      }
    } catch {
      toast.error('Network error. Please email me directly.')
    }
    setLoading(false)
  }

  const contactItems = [
    { icon: HiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: HiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: HiLocationMarker, label: 'Location', value: 'Aurangabad, MH · Pan-India', href: null },
    { icon: HiExternalLink, label: 'LinkedIn', value: 'linkedin.com/in/veer-pawar-4a560a257', href: personalInfo.linkedin },
  ]

  return (
    <section id="contact" ref={ref} className="py-28 relative">
      {/* bg glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="terminal-text text-sm">06. // CONTACT</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Let's build something <span className="gradient-text">real</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted max-w-lg mb-14 text-sm leading-relaxed"
        >
          I'm actively looking for AI/ML engineering roles. If you're building something that needs to work in production, let's talk.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="space-y-4 mb-8">
              {contactItems.map((item, i) => (
                <div key={i} className="glass rounded-xl p-4 border border-border flex items-center gap-4 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted font-mono mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm text-text hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-text">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="glass rounded-xl p-5 border border-accent-3/20 bg-accent-3/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-3 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-3"></span>
                </span>
                <span className="text-accent-3 text-sm font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Open to full-time AI/ML roles, contract work, and startup opportunities.
                Pan-India relocation ready. Can join within 30 days.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 border border-border space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted font-mono mb-1.5 block">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted font-mono mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-muted font-mono mb-1.5 block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  placeholder="Job opportunity / Project collaboration / ..."
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-muted font-mono mb-1.5 block">Message *</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about the role or project..."
                  rows={5}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="relative z-10 animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </button>

              <p className="text-xs text-muted text-center">
                Or email directly:{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-accent hover:underline">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
