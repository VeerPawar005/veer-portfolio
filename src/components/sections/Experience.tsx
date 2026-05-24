'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '@/lib/data'
import { HiCheckCircle, HiChip } from 'react-icons/hi'

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="terminal-text text-sm">03. // PROFESSIONAL EXPERIENCE</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-14"
        >
          Where I've <span className="gradient-text">shipped AI</span>
        </motion.h2>

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="glass rounded-2xl border border-border overflow-hidden animated-border">
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-border">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                        <HiChip className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-text">{exp.role}</h3>
                        <div className="text-accent text-sm font-medium">{exp.company}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="badge">{exp.duration}</span>
                      <span className="badge badge-green">{exp.type}</span>
                    </div>
                  </div>

                  {/* Impact pill */}
                  <div className="glass-strong rounded-xl px-4 py-3 text-right border border-accent/20 max-w-xs">
                    <div className="text-xs text-muted mb-1">KEY IMPACT</div>
                    <div className="text-xs text-accent-3 font-mono leading-relaxed">{exp.impact}</div>
                  </div>
                </div>
              </div>

              {/* Project */}
              <div className="p-6 md:p-8">
                <div className="mb-5">
                  <div className="text-xs text-muted font-mono mb-2">PROJECT</div>
                  <div className="font-bold text-text text-lg">{exp.project}</div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mt-6">
                  {exp.highlights.map((h, hi) => (
                    <motion.div
                      key={hi}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + hi * 0.1 }}
                      className="flex gap-3 items-start"
                    >
                      <HiCheckCircle className="w-4 h-4 text-accent-3 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted leading-relaxed">{h}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture visual — terminal style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 glass rounded-xl border border-border overflow-hidden"
            >
              <div className="px-4 py-2.5 border-b border-border bg-surface flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-muted font-mono ml-2">system_architecture.py</span>
              </div>
              <div className="p-4 font-mono text-xs leading-loose">
                <div><span className="text-accent-2"># AI Voice Agent Pipeline</span></div>
                <div><span className="text-muted">incoming_call</span> <span className="text-accent">→</span> <span className="text-text">LiveKit RTC</span> <span className="text-accent">→</span> <span className="text-text">Sarvam STT (saarika:v2.5)</span></div>
                <div><span className="text-text">transcription</span> <span className="text-accent">→</span> <span className="text-accent-3">intent_pipeline()</span> <span className="text-muted"># 3-layer: rules → embeddings → LLM</span></div>
                <div><span className="text-text">intent</span> <span className="text-accent">+</span> <span className="text-accent-3">RAG_context()</span> <span className="text-accent">→</span> <span className="text-text">LLM response generation</span></div>
                <div><span className="text-text">response</span> <span className="text-accent">→</span> <span className="text-text">Sarvam TTS (bulbul:v3)</span> <span className="text-accent">→</span> <span className="text-text">caller</span></div>
                <div><span className="text-muted">task_queue</span><span className="text-accent">:</span> <span className="text-text">Redis</span> <span className="text-muted">| langs</span><span className="text-accent">:</span> <span className="text-accent-3">11 Indian languages</span> <span className="text-muted">| server</span><span className="text-accent">:</span> <span className="text-text">FastAPI</span></div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
