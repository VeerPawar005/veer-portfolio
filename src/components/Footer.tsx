'use client'
import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'
import { HiMail } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-xs font-bold text-bg font-mono">
              VP
            </div>
            <div>
              <div className="font-bold text-text">Veer Pawar</div>
              <div className="text-xs text-muted">AI Engineer · Available for Hire</div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-border hover:border-accent/50 hover:text-accent transition-all text-muted"
            >
              <HiMail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-border hover:border-accent-2/50 hover:text-accent-2 transition-all text-muted"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-border hover:border-accent-3/50 hover:text-accent-3 transition-all text-muted"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted font-mono text-center md:text-right">
            <div>Built by Veer Pawar</div>
            <div className="text-accent/60 mt-0.5">Next.js · TypeScript · Framer Motion</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap justify-center gap-x-6 gap-y-2">
          {['AI Engineer', 'ML Engineer', 'RAG Pipelines', 'Agentic AI', 'Computer Vision', 'FastAPI', 'Python', 'LLM'].map((tag) => (
            <span key={tag} className="text-xs text-muted/50 font-mono">{tag}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
