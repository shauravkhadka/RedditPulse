'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { labNotes, labNotesSection } from '@/src/data/portfolio'
import type { LabNote } from '@/src/data/portfolio'

/**
 * LabNotesSection — preview of short technical reflections. Cards link out
 * only when a URL exists; otherwise they render as static cards.
 */
export function LabNotesSection() {
  return (
    <Section id="notes">
      <Reveal>
        <SectionHeading
          eyebrow="Research Writing"
          title={labNotesSection.heading}
          intro={labNotesSection.intro}
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {labNotes.map((note, i) => (
          <Reveal key={note.title} delay={(i % 4) * 0.06} as="div" className={note.featured ? 'md:col-span-2 xl:col-span-2' : ''}>
            <NoteCard note={note} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function NoteCard({ note }: { note: LabNote }) {
  const reduce = useReducedMotion()

  const inner = (
    <>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        {note.eyebrow || 'Research Note'}
      </p>
      <h3 className="mt-3 text-balance text-lg font-medium leading-snug text-foreground">
        {note.title}
      </h3>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
        {note.excerpt}
      </p>
      {note.url ? (
        <span className="luxury-action luxury-action-compact mt-5 w-fit">
          Read note
          <ArrowUpRight className="size-4 text-accent" />
        </span>
      ) : null}
    </>
  )

  const baseClass =
    `flex h-full flex-col rounded-2xl border bg-card/60 p-6 shadow-[0_16px_48px_-38px_rgba(0,0,0,0.8)] sm:p-7 ${note.featured ? 'border-accent/35 bg-accent/[0.045]' : 'border-border'}`

  if (note.url) {
    return (
      <motion.a
        href={note.url}
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={`${baseClass} transition-colors hover:border-accent/40`}
      >
        {inner}
      </motion.a>
    )
  }

  return <div className={baseClass}>{inner}</div>
}
