import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { EditorialSystemCard } from '@/components/editorial-system-card'
import { allSystems, systemsPortfolioSection } from '@/src/data/editorial'

/** SystemsPortfolioSection — one complete six-system portfolio, ordered by inspectability and research value. */
export function SystemsPortfolioSection() {
  return (
    <Section id="work">
      <Reveal>
        <SectionHeading
          eyebrow="Inspectable Systems"
          title={systemsPortfolioSection.heading}
          intro={systemsPortfolioSection.intro}
        />
      </Reveal>

      <Reveal>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {systemsPortfolioSection.metrics.map((metric) => (
            <div key={metric.label} className="premium-surface px-4 py-3 sm:px-5">
              <p className="font-heading text-2xl tracking-tight text-accent">{metric.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {allSystems.map((system, index) => (
          <Reveal key={system.title} delay={(index % 3) * 0.05} as="div" className="h-full">
            <EditorialSystemCard system={system} index={index + 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
