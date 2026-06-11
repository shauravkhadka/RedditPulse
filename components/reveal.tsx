'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'

/**
 * Reveal — progressive enhancement scroll reveal.
 *
 * Content is visible in the server-rendered HTML and remains readable when
 * JavaScript is disabled or delayed. After hydration, below-the-fold content
 * receives a lightweight reveal animation unless reduced motion is preferred.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const Tag = as

  // Visible HTML first: robust if JS is slow, unavailable, or interrupted.
  if (!mounted || reduce) {
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motion[as]
  const variants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
