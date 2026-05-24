'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { personalInfo } from '@/lib/data'
import { HiDownload, HiArrowRight, HiMail } from 'react-icons/hi'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-2/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-3/5 blur-[100px]" />
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Terminal intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8 border border-accent/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-3 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-3"></span>
          </span>
          <span className="terminal-text text-sm">Available for AI Engineering roles · Pan-India</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-text">Veer </span>
          <span className="gradient-text">Pawar</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-mono text-muted mb-6 h-8 flex items-center justify-center"
        >
          <span className="text-accent mr-2">&gt;</span>
          <TypeAnimation
            sequence={personalInfo.roles.flatMap(r => [r, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-text"
          />
          <span className="typing-cursor ml-1" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          I build AI systems that actually ship — voice agents negotiating live freight calls,
          computer vision on CCTV infrastructure, RAG pipelines cutting procurement time by 40%.
          <span className="text-accent"> Production AI, not demos.</span>
        </motion.p>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {personalInfo.badges.map((badge, i) => (
            <span key={i} className={`badge ${i % 3 === 1 ? 'badge-purple' : i % 3 === 2 ? 'badge-green' : ''}`}>
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            <span>See My Work</span>
            <HiArrowRight className="w-4 h-4 relative z-10" />
          </a>
          <a href={personalInfo.resumeUrl} download className="btn-secondary">
            <HiDownload className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
          <a href="#contact" className="btn-secondary">
            <HiMail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { val: '5+', label: 'Production Systems' },
            { val: '40%', label: 'Effort Reduced' },
            { val: '8.0', label: 'CGPA / 10' },
            { val: '24 FPS', label: 'CV Throughput' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-4 border border-border">
              <div className="text-2xl md:text-3xl font-bold gradient-text font-mono">{stat.val}</div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
