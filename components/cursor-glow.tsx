'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

/**
 * CursorGlow — a subtle radial light that follows the pointer on desktop.
 * Disabled on touch devices and when reduced motion is preferred.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable for fine pointers (mouse/trackpad) and non-reduced motion.
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer || reduce) return
    setEnabled(true)

    let frame = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
    }
  }, [reduce])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      <div
        ref={ref}
        className="absolute -left-[300px] -top-[300px] size-[600px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, oklch(0.78 0.13 75 / 10%), transparent)',
        }}
      />
    </div>
  )
}
