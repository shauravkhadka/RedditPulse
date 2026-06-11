import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { about } from '@/src/data/portfolio'

/**
 * AboutSection — narrative about the work and approach.
 */
export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="About" title={about.heading} />
        </Reveal>

        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
