'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/lib/data'

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" ref={ref} className="py-28 relative">
      {/* bg glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-2/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="terminal-text text-sm">02. // TECHNICAL SKILLS</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Full-stack <span className="gradient-text">AI engineering</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted max-w-xl mb-14 text-sm leading-relaxed"
        >
          From model architecture to production deployment — I work across the entire AI stack.
          Not just a research engineer. Not just a backend dev. Both.
        </motion.p>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass rounded-2xl p-6 border border-border card-hover group relative overflow-hidden"
            >
              {/* gradient corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                category.color === 'accent' ? 'bg-accent/5' :
                category.color === 'accent-2' ? 'bg-accent-2/5' : 'bg-accent-3/5'
              }`} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className={`font-bold text-sm ${
                  category.color === 'accent' ? 'text-accent' :
                  category.color === 'accent-2' ? 'text-accent-2' : 'text-accent-3'
                }`}>
                  {category.category}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-2.5 py-1 rounded-md font-mono font-medium transition-all duration-200 ${
                      category.color === 'accent'
                        ? 'bg-accent/8 text-accent/80 hover:bg-accent/15 hover:text-accent'
                        : category.color === 'accent-2'
                        ? 'bg-accent-2/8 text-accent-2/80 hover:bg-accent-2/15 hover:text-accent-2'
                        : 'bg-accent-3/8 text-accent-3/80 hover:bg-accent-3/15 hover:text-accent-3'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 glass rounded-2xl p-6 border border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Primary Language', value: 'Python', mono: true },
              { label: 'ML Frameworks', value: 'TF · PyTorch', mono: true },
              { label: 'CV Model', value: 'YOLOv8', mono: true },
              { label: 'API Framework', value: 'FastAPI', mono: true },
            ].map((item, i) => (
              <div key={i}>
                <div className={`text-lg font-bold gradient-text ${item.mono ? 'font-mono' : ''}`}>{item.value}</div>
                <div className="text-xs text-muted mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
