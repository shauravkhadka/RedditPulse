'use client'

import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { capabilitiesSection, capabilityGroups } from '@/src/data/portfolio'
import { cn } from '@/lib/utils'

/**
 * CapabilitiesSection — five capability groups. On small screens each group
 * is collapsible; on large screens they are always expanded in a grid.
 */
export function CapabilitiesSection() {
  return (
    <Section id="capabilities">
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title={capabilitiesSection.heading}
          intro={capabilitiesSection.intro}
        />
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {capabilityGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.06} as="div">
            <CapabilityGroupCard title={group.title} items={group.items} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function CapabilityGroupCard({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-border bg-card/60 p-6 sm:p-7">
      {/* Header: a button on mobile (toggles), static on desktop */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left lg:cursor-default"
      >
        <h3 className="font-heading text-2xl tracking-tight text-foreground">
          {title}
        </h3>
        <ChevronDown
          className={cn(
            'size-5 shrink-0 text-muted-foreground transition-transform lg:hidden',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      <ul
        className={cn(
          'mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2',
          // Collapsed only on mobile
          open ? 'grid' : 'hidden lg:grid',
        )}
      >
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
