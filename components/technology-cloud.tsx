import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { technologyGroups, toolsSection } from '@/src/data/portfolio'
import { cn } from '@/lib/utils'

/** TechnologyCloud — research methods first; applied tools second. */
export function TechnologyCloud() {
  return (
    <Section id="tools">
      <Reveal>
        <SectionHeading eyebrow="Toolkit" title={toolsSection.heading} intro={toolsSection.intro} />
      </Reveal>

      <div className="mt-10 grid gap-5 xl:grid-cols-[0.96fr_1.04fr]">
        {technologyGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05} as="article" className="h-full">
            <div className={cn('premium-surface flex h-full min-w-0 flex-col p-5 sm:p-6', group.variant === 'methods' && 'border-accent/25 bg-[linear-gradient(135deg,rgba(221,171,72,0.07),rgba(255,255,255,0.01)_62%)]')}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-accent">{group.variant === 'methods' ? 'Actively developing' : 'Used in applied systems'}</p>
                  <h3 className="mt-3 text-balance font-heading text-2xl tracking-tight text-foreground">{group.title}</h3>
                </div>
                <span className="w-fit shrink-0 rounded-full border border-border bg-background/35 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.13em] text-muted-foreground">{group.items.length} {group.variant === 'methods' ? 'methods' : 'tools'}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{group.note}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => <li key={item} className={cn('rounded-lg border px-3 py-2 font-mono text-[11px] leading-relaxed transition-colors', group.variant === 'methods' ? 'border-accent/15 bg-accent/[0.04] text-muted-foreground hover:border-accent/35 hover:text-foreground' : 'border-border bg-card/60 text-muted-foreground hover:border-accent/40 hover:text-foreground')}>{item}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
