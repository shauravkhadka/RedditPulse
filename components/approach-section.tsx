import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { approach } from '@/src/data/portfolio'

/** A compact process layer: credible, useful, and easy to scan. */
export function ApproachSection() {
  return (
    <Section id="approach">
      <Reveal>
        <SectionHeading
          eyebrow={approach.eyebrow}
          title={approach.heading}
          intro={approach.intro}
        />
      </Reveal>

      <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-5">
        {approach.steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.04} as="li">
            <div className="group h-full bg-card/95 p-5 transition-colors hover:bg-secondary/70 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs tracking-[0.16em] text-accent">
                  {step.number}
                </span>
                {i < approach.steps.length - 1 ? (
                  <ArrowRight className="hidden size-4 text-muted-foreground/50 md:block" aria-hidden="true" />
                ) : null}
              </div>
              <h3 className="mt-8 font-heading text-2xl tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
