'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function CursorAndProgress() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      setTimeout(() => {
        if (followerRef.current) {
          followerRef.current.style.left = e.clientX + 'px'
          followerRef.current.style.top = e.clientY + 'px'
        }
      }, 80)
    }

    const handleHoverIn = () => setIsHovering(true)
    const handleHoverOut = () => setIsHovering(false)

    const interactiveEls = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn)
      el.addEventListener('mouseleave', handleHoverOut)
    })

    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverIn)
        el.removeEventListener('mouseleave', handleHoverOut)
      })
    }
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className={`cursor hidden md:block ${isHovering ? 'cursor-hover' : ''}`}
      />
      <div
        ref={followerRef}
        className="cursor-follower hidden md:block"
      />
    </>
  )
}
