import { ArrowUpRight, Atom, Mail } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { links, researchDirections, researchFoundationGroups, researchSection } from '@/src/data/portfolio'
import { cn } from '@/lib/utils'

/** ResearchDirectionsSection — quantum-first research intent without overstating completed expertise. */
export function ResearchDirectionsSection() {
  const inquiryEmail = links.researchEmail || links.email
  const inquiryHref = inquiryEmail ? `mailto:${inquiryEmail}?subject=${encodeURIComponent(researchSection.ctaSubject)}` : ''
  const [primary, ...supporting] = researchDirections

  return (
    <Section id="research">
      <div className="grid gap-10 xl:grid-cols-[0.76fr_1.24fr] xl:gap-14">
        <Reveal>
          <div className="xl:sticky xl:top-28">
            <SectionHeading eyebrow="Research Profile" title={researchSection.heading} intro={researchSection.intro} />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{researchSection.statement}</p>
            {inquiryHref ? <a href={inquiryHref} className="luxury-action luxury-action-primary mt-7 w-full sm:w-auto"><Mail className="size-4" />{researchSection.ctaLabel}<ArrowUpRight className="size-3.5" /></a> : null}
          </div>
        </Reveal>

        <div className="min-w-0 space-y-5">
          <Reveal as="article">
            <div className="premium-surface relative overflow-hidden border-accent/35 bg-[linear-gradient(135deg,rgba(221,171,72,0.11),rgba(255,255,255,0.01)_56%)] p-6 sm:p-7">
              <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-accent/[0.11] blur-3xl" aria-hidden="true" />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.17em] text-accent"><Atom className="size-4" aria-hidden="true" />{researchSection.primaryLabel}</div>
                  <h3 className="mt-4 max-w-3xl text-balance font-heading text-3xl leading-[1.02] tracking-tight text-foreground sm:text-4xl">{primary.title}</h3>
                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{primary.description}</p>
                </div>
                <span className="w-fit shrink-0 rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{primary.status}</span>
              </div>
              <div className="relative mt-6 border-t border-border pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Questions I want to pursue</p>
                <ul className="mt-3 grid gap-2.5 md:grid-cols-3">
                  {primary.questions.map((question) => <li key={question} className="rounded-xl border border-border bg-background/35 p-3 text-xs leading-relaxed text-muted-foreground"><span className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" aria-hidden="true" />{question}</li>)}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {supporting.map((direction, index) => (
              <Reveal key={direction.title} delay={index * 0.05} as="article" className="h-full">
                <div className="premium-surface flex h-full min-w-0 flex-col p-5 sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{direction.status}</p>
                  <h3 className="mt-4 text-balance text-lg font-medium leading-snug text-foreground">{direction.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{direction.description}</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Questions I want to pursue</p>
                    <ul className="mt-3 space-y-2">
                      {direction.questions.map((question) => <li key={question} className="flex gap-2 text-xs leading-relaxed text-muted-foreground"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{question}</li>)}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="premium-surface p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-accent">Research map</p>
              <h3 className="mt-3 font-heading text-2xl tracking-tight text-foreground">{researchSection.foundationsHeading}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{researchSection.foundationsIntro}</p>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {researchFoundationGroups.map((group) => (
                  <div key={group.title} className="rounded-xl border border-border bg-background/35 p-4">
                    <p className="text-sm font-medium text-foreground">{group.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{group.note}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => <li key={item} className="rounded-md border border-border bg-secondary/45 px-2.5 py-1 font-mono text-[10px] leading-relaxed text-muted-foreground">{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
