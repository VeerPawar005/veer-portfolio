'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '@/lib/data'
import { HiAcademicCap, HiCode, HiLightningBolt, HiGlobe } from 'react-icons/hi'

const traits = [
  {
    icon: HiLightningBolt,
    label: 'Production-First',
    desc: 'I build systems meant to go live — not just notebooks that stay in GitHub.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: HiCode,
    label: 'Full-Stack AI',
    desc: 'From model training to REST API deployment. End-to-end, cross-team delivery.',
    color: 'text-accent-2',
    bg: 'bg-accent-2/10',
  },
  {
    icon: HiGlobe,
    label: 'Real Impact',
    desc: 'Every project is measured by outcomes — latency, accuracy, cost reduction.',
    color: 'text-accent-3',
    bg: 'bg-accent-3/10',
  },
  {
    icon: HiAcademicCap,
    label: 'CGPA 8.0 · 2026',
    desc: 'B.Tech AI & Data Science. Strong fundamentals, stronger applied engineering.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="terminal-text text-sm">01. // ABOUT ME</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            >
              I don't just experiment with AI.{' '}
              <span className="gradient-text">I ship it.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-muted leading-relaxed"
            >
              {personalInfo.about.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm md:text-base">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Contact quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href={`mailto:${personalInfo.email}`} className="badge">
                ✉ {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="badge badge-purple">
                in LinkedIn
              </a>
              <span className="badge badge-green">
                📍 {personalInfo.location.split('—')[0]}
              </span>
            </motion.div>
          </div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass rounded-xl p-5 border border-border card-hover group"
              >
                <div className={`w-10 h-10 rounded-lg ${t.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <t.icon className={`w-5 h-5 ${t.color}`} />
                </div>
                <div className="font-semibold text-text mb-1 text-sm">{t.label}</div>
                <div className="text-xs text-muted leading-relaxed">{t.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-6 border border-border flex flex-wrap items-center gap-6"
        >
          <div className="flex-1 min-w-[200px]">
            <div className="text-xs text-muted font-mono mb-1">EDUCATION</div>
            <div className="font-semibold text-text">{personalInfo.degree}</div>
            <div className="text-sm text-muted">{personalInfo.college}</div>
          </div>
          <div className="text-center px-6 border-l border-border">
            <div className="text-3xl font-bold gradient-text font-mono">{personalInfo.cgpa}</div>
            <div className="text-xs text-muted">CGPA / 10</div>
          </div>
          <div className="text-center px-6 border-l border-border">
            <div className="text-3xl font-bold gradient-text-2 font-mono">{personalInfo.grad_year}</div>
            <div className="text-xs text-muted">Graduating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
