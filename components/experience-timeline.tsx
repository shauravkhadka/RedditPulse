import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { experience, experienceSection } from '@/src/data/portfolio'
import { supportingExperience } from '@/src/data/editorial'

/** ExperienceTimeline — technical work first; supporting operations remains visible but secondary. */
export function ExperienceTimeline() {
  return (
    <Section id="experience">
      <Reveal><SectionHeading eyebrow="Experience" title={experienceSection.heading} intro={experienceSection.intro} /></Reveal>
      <ol className="mt-12 border-l border-border">
        {experience.map((entry, i) => <Reveal key={`${entry.organisation}-${entry.role}`} delay={i * 0.06} as="li"><div className="relative pb-11 pl-8 last:pb-0"><span className="absolute -left-[5px] top-2 size-2.5 rounded-full border border-accent bg-background" aria-hidden="true" /><div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6"><div><p className="font-mono text-[11px] uppercase tracking-[0.17em] text-accent">{entry.organisation}</p><h3 className="mt-2 text-lg font-medium text-foreground">{entry.role}</h3></div><div className="shrink-0 text-left sm:text-right"><p className="font-mono text-xs text-foreground/80">{entry.dates}</p><p className="mt-1 text-xs text-muted-foreground">{entry.location}</p></div></div><p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">{entry.summary}</p><ul className="mt-4 flex flex-wrap gap-2">{entry.tags.map((tag) => <li key={tag} className="rounded-md border border-border bg-card/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{tag}</li>)}</ul></div></Reveal>)}
      </ol>
      <Reveal>
        <div className="mt-10 rounded-xl border border-border bg-card/50 p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-accent">Additional Australian operations experience</p>
          <h3 className="mt-3 text-base font-medium text-foreground">{supportingExperience.organisation} · {supportingExperience.role}</h3>
          <p className="mt-2 font-mono text-xs text-muted-foreground">{supportingExperience.dates}</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{supportingExperience.summary}</p>
        </div>
      </Reveal>
    </Section>
  )
}
