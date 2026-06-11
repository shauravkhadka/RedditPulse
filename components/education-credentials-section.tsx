import { Award, GraduationCap } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { credentials, education, educationSection } from '@/src/data/portfolio'

/** EducationCredentialsSection — formal study and selected proof of continued learning. */
export function EducationCredentialsSection() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeading eyebrow="Foundation" title={educationSection.heading} intro={educationSection.intro} />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          {education.map((entry, index) => (
            <Reveal key={entry.institution} delay={index * 0.06}>
              <article className="rounded-xl border border-border bg-card/60 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.17em] text-accent">Education</p>
                    <h3 className="mt-3 text-lg font-medium text-foreground">{entry.institution}</h3>
                    <p className="mt-1 text-sm text-foreground/85">{entry.qualification}</p>
                  </div>
                  <GraduationCap className="size-5 shrink-0 text-accent" aria-hidden="true" />
                </div>
                <p className="mt-4 font-mono text-xs text-muted-foreground">{entry.dates} · {entry.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{entry.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-xl border border-border bg-card/60 p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.17em] text-accent">Selected Credentials</p>
              <Award className="size-5 text-accent" aria-hidden="true" />
            </div>
            <ul className="mt-5 space-y-4">
              {credentials.map((credential) => (
                <li key={`${credential.issuer}-${credential.title}`} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                  <h3 className="text-sm font-medium text-foreground">{credential.title}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent/90">{credential.issuer}</p>
                  {credential.note ? <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{credential.note}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
