'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)
  const [line, setLine] = useState(0)

  const lines = [
    '> initializing AI portfolio...',
    '> loading production systems...',
    '> mounting RAG pipelines...',
    '> ready.',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + 4
      })
    }, 40)

    const lineInterval = setInterval(() => {
      setLine(l => {
        if (l >= lines.length - 1) { clearInterval(lineInterval); return l }
        return l + 1
      })
    }, 400)

    const timer = setTimeout(() => setDone(true), 1800)
    return () => { clearInterval(interval); clearInterval(lineInterval); clearTimeout(timer) }
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="loading-screen"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-2xl font-bold text-bg font-mono mx-auto mb-4">
              VP
            </div>
            <div className="text-center font-bold text-xl gradient-text">Veer Pawar</div>
          </motion.div>

          {/* Terminal */}
          <div className="glass rounded-xl p-4 w-72 border border-accent/20 mb-6 font-mono text-xs space-y-1">
            {lines.slice(0, line + 1).map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === line ? 'text-accent-3' : 'text-muted'}
              >
                {l}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-72 h-1 bg-surface rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="text-xs text-muted font-mono mt-2">{progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
