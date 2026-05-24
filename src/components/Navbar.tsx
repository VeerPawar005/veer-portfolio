'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { navLinks, personalInfo } from '@/lib/data'
import { HiMenuAlt3, HiX, HiDownload } from 'react-icons/hi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      // Detect active section
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const s of sections.reverse()) {
        const el = document.getElementById(s)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(s)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-xs font-bold text-bg font-mono">
              VP
            </div>
            <span className="font-display font-bold text-lg tracking-tight gradient-text hidden sm:block">
              Veer Pawar
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-accent bg-accent/10'
                    : 'text-muted hover:text-text hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-secondary text-sm py-2 px-4"
            >
              <HiDownload className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text p-2"
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass-strong flex flex-col pt-20 px-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-xl font-semibold text-text border-b border-border hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="btn-primary mt-8 justify-center"
            >
              <HiDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
