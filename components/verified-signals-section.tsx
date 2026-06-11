'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, ChevronsDown, ChevronsUp } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { verifiedSignals } from '@/src/data/editorial'
import { cn } from '@/lib/utils'

/** VerifiedSignalsSection — independently expandable evidence cards with equal visual rhythm. */
export function VerifiedSignalsSection() {
  const allIndexes = useMemo(() => verifiedSignals.map((_, index) => index), [])
  const [openSignals, setOpenSignals] = useState<Set<number>>(() => new Set([0]))
  const allOpen = openSignals.size === verifiedSignals.length

  const toggleSignal = (index: number) => {
    setOpenSignals((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const toggleAll = () => setOpenSignals(allOpen ? new Set<number>() : new Set(allIndexes))

  return (
    <Section id="signals">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading eyebrow="Measured Highlights" title="Three results worth remembering." intro="These are benchmark anchors, not a separate project list. Open any card for context, then inspect the complete six-system portfolio below." />
        </Reveal>
        <Reveal>
          <button type="button" onClick={toggleAll} className="luxury-action luxury-action-compact w-fit" aria-label={allOpen ? 'Collapse all verified signals' : 'Expand all verified signals'}>
            {allOpen ? <ChevronsUp className="size-4 text-accent" /> : <ChevronsDown className="size-4 text-accent" />}
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </Reveal>
      </div>

      <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
        {verifiedSignals.map((signal, index) => {
          const active = openSignals.has(index)
          const panelId = `signal-panel-${index}`
          return (
            <Reveal key={signal.title} delay={index * 0.05} as="article" className="h-full">
              <div className={cn('flex h-full min-w-0 flex-col overflow-hidden rounded-xl border bg-card/60 transition-all duration-300', active ? 'border-accent/45 bg-card/90 shadow-2xl shadow-black/10' : 'border-border hover:border-accent/25 hover:bg-card/80')}>
                <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                  <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/65">Measured highlight {String(index + 1).padStart(2, '0')} / {String(verifiedSignals.length).padStart(2, '0')}</p>
                  <div className="flex min-h-[5.2rem] items-end"><p className="break-words font-heading text-[clamp(2rem,7vw,2.8rem)] leading-[0.95] tracking-tight text-accent">{signal.value}</p></div>
                  <h3 className="mt-4 min-h-[3.1rem] text-base font-medium leading-snug text-foreground">{signal.title}</h3>
                  <p className="mt-3 min-h-[6.9rem] text-sm leading-relaxed text-muted-foreground xl:min-h-[7.6rem]">{signal.intro}</p>
                  <div className="mt-auto grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
                    <a href={signal.caseStudyUrl} className="luxury-action luxury-action-compact w-full">Inspect case study <ArrowUpRight className="size-3.5 text-accent" /></a>
                    <a href={signal.evidenceUrl} className="luxury-action luxury-action-compact w-full">Evidence index <ArrowUpRight className="size-3.5 text-accent" /></a>
                    {signal.demoUrl ? <a href={signal.demoUrl} target="_blank" rel="noopener noreferrer" className="luxury-action luxury-action-compact w-full sm:col-span-2">Live demo <ArrowUpRight className="size-3.5 text-accent" /></a> : null}
                  </div>
                  <button type="button" onClick={() => toggleSignal(index)} aria-expanded={active} aria-controls={panelId} className="mt-4 flex w-full items-center justify-between gap-4 rounded-lg border border-border bg-background/30 px-3 py-2.5 text-left font-mono text-[10px] uppercase leading-relaxed tracking-[0.13em] text-accent transition-colors hover:border-accent/35 hover:bg-background/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">
                    <span>{active ? 'Hide evaluation context' : 'View evaluation context'}</span><span className="shrink-0 text-base" aria-hidden="true">{active ? '−' : '+'}</span>
                  </button>
                </div>
                {active ? <div id={panelId} className="flex flex-1 border-t border-border px-5 pb-5 pt-4 sm:px-6 sm:pb-6"><dl className="grid h-full w-full auto-rows-fr gap-3">{signal.contexts.map((item) => <div key={item.label} className="rounded-lg border border-border bg-background/25 p-3"><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{item.label}</dt><dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.value}</dd></div>)}</dl></div> : null}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
