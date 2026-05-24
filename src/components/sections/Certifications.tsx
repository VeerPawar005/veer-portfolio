'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { certifications, education } from '@/lib/data'
import { HiBadgeCheck, HiAcademicCap } from 'react-icons/hi'

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certifications" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="terminal-text text-sm">05. // CERTIFICATIONS & EDUCATION</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-14"
        >
          Credentials & <span className="gradient-text">Learning</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <HiBadgeCheck className="w-5 h-5 text-accent" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="glass rounded-xl p-5 border border-border card-hover flex items-start gap-4"
                >
                  <div className="text-2xl flex-shrink-0">{cert.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-text text-sm leading-snug mb-1">{cert.title}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted">{cert.issuer}</span>
                      <span className={`badge text-xs ${
                        cert.color === 'accent' ? '' :
                        cert.color === 'accent-2' ? 'badge-purple' : 'badge-green'
                      }`}>{cert.badge}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <HiAcademicCap className="w-5 h-5 text-accent-2" />
              Education
            </h3>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent" />

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Dot */}
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-bg" />

                  <div className="glass rounded-xl p-4 border border-border">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="font-semibold text-text text-sm">{edu.degree}</div>
                      <span className="badge flex-shrink-0 text-xs">{edu.score}</span>
                    </div>
                    <div className="text-xs text-muted mb-1">{edu.institution}</div>
                    <div className="text-xs text-muted font-mono">{edu.year}</div>
                    {edu.coursework && (
                      <div className="mt-2 text-xs text-accent/70 font-mono">{edu.coursework}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Hackathon achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 glass rounded-2xl p-6 border border-border"
        >
          <div className="text-xs text-muted font-mono mb-4">🏆 HACKATHON ACHIEVEMENTS</div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'SIH 2025 National Finalist', desc: 'Smart India Hackathon — Top national finalists among thousands of teams', color: 'text-accent' },
              { title: 'International Agri Hackathon Runner-Up', desc: 'International-level competition — 2nd place finish', color: 'text-accent-3' },
              { title: '2× National Hackathon Finalist', desc: 'Consistent top performance across multiple national-level competitions', color: 'text-accent-2' },
            ].map((ach, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-surface border border-border">
                <div className={`font-bold text-sm mb-1 ${ach.color}`}>{ach.title}</div>
                <div className="text-xs text-muted leading-relaxed">{ach.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
