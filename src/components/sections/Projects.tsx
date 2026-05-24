'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/lib/data'
import { HiChevronDown, HiChevronUp, HiCheckCircle, HiLightningBolt } from 'react-icons/hi'

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="glass rounded-2xl border border-border overflow-hidden card-hover group relative"
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span
              className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md mb-2 inline-block"
              style={{ background: `${project.accent}15`, color: project.accent }}
            >
              {project.category}
            </span>
            <h3 className="font-bold text-lg text-text leading-tight">{project.title}</h3>
            <p className="text-xs text-muted mt-1 font-mono">{project.tagline}</p>
          </div>
        </div>

        {/* Problem statement */}
        <div className="glass rounded-xl p-3 mb-4 border border-border">
          <div className="text-xs text-muted font-mono mb-1">PROBLEM</div>
          <p className="text-sm text-text/80 leading-relaxed">{project.problem}</p>
        </div>

        {/* Impact */}
        <div className="flex items-start gap-2 mb-4">
          <HiLightningBolt className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: project.accent }} />
          <p className="text-xs font-mono" style={{ color: project.accent }}>{project.impact}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded font-mono"
              style={{ background: `${project.accent}10`, color: `${project.accent}cc` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expand button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-6 py-3 border-t border-border text-xs text-muted hover:text-text transition-colors font-mono group-hover:border-border/80"
      >
        <span>{expanded ? 'Show less' : 'Technical details'}</span>
        {expanded ? <HiChevronUp className="w-4 h-4" /> : <HiChevronDown className="w-4 h-4" />}
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-4">
              <div className="text-xs text-muted font-mono mb-3">HIGHLIGHTS</div>
              <div className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <HiCheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: project.accent }} />
                    <span className="text-sm text-muted leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              {/* Solution */}
              <div className="mt-4 glass rounded-xl p-3 border border-border">
                <div className="text-xs text-muted font-mono mb-1">SOLUTION</div>
                <p className="text-sm text-text/80 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" ref={ref} className="py-28 relative">
      {/* bg glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-2/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="terminal-text text-sm">04. // PROJECTS</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Systems I've <span className="gradient-text">built & shipped</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted max-w-xl mb-14 text-sm leading-relaxed"
        >
          Each project starts with a real problem, ends with measurable impact.
          Click any card to see technical architecture and implementation details.
        </motion.p>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
