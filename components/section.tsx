import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * SectionHeading — consistent eyebrow + title + intro block used by sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow?: string
  title: string
  intro?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-heading text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  )
}

/**
 * Section — standard section shell with id, vertical rhythm, and divider.
 */
export function Section({
  id,
  children,
  className,
  divider = true,
}: {
  id?: string
  children: ReactNode
  className?: string
  divider?: boolean
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 px-6 py-20 sm:py-28 lg:px-8',
        divider && 'border-t border-border',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
