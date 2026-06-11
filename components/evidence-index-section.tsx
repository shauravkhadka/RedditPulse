import { ArrowUpRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { evidenceIndexEntries } from '@/src/data/editorial'

const statusStyle = {
  'public-benchmark': 'text-emerald-300 border-emerald-300/25 bg-emerald-300/[0.06]',
  'public-method': 'text-sky-300 border-sky-300/25 bg-sky-300/[0.06]',
  'synthetic-validation': 'text-cyan-300 border-cyan-300/25 bg-cyan-300/[0.06]',
  'research-scope': 'text-amber-300 border-amber-300/25 bg-amber-300/[0.06]',
  exploration: 'text-violet-300 border-violet-300/25 bg-violet-300/[0.06]',
}

const statusLabel = {
  'public-benchmark': 'public benchmark',
  'public-method': 'public method',
  'synthetic-validation': 'synthetic validation',
  'research-scope': 'research scope',
  exploration: 'exploration',
}

const desktopColumns = '2xl:grid-cols-[minmax(0,1.28fr)_minmax(0,1.12fr)_minmax(0,1fr)_auto_auto]'

/** EvidenceIndexSection — concise public index of inspectable artifacts and scope. */
export function EvidenceIndexSection() {
  return (
    <Section id="evidence">
      <Reveal><SectionHeading eyebrow="Research Evidence" title="Selected evidence and public scope." intro="A concise record of published benchmarks, method descriptions, and selected artifacts supporting the work shown above." /></Reveal>
      <Reveal>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card/50 shadow-[0_22px_72px_-54px_rgba(0,0,0,0.9)]">
          <div className={`hidden border-b border-border bg-background/45 px-6 py-4 2xl:grid 2xl:items-center 2xl:gap-5 ${desktopColumns}`}>
            {['Project', 'Claim', 'Evidence', 'Scope', 'Inspect'].map((label) => <p key={label} className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>)}
          </div>
          <div>
            {evidenceIndexEntries.map((entry) => <article key={entry.project} className="min-w-0 rounded-xl border border-border bg-background/35 p-5 transition-colors hover:border-accent/25 hover:bg-background/55 2xl:rounded-none 2xl:border-0 2xl:border-b 2xl:bg-transparent 2xl:px-6 2xl:py-5 2xl:last:border-b-0"><div className={`grid min-w-0 gap-4 2xl:items-center 2xl:gap-5 ${desktopColumns}`}>
              <div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground 2xl:hidden">Project</p><p className="mt-1 break-words text-sm font-medium leading-relaxed text-foreground 2xl:mt-0">{entry.project}</p></div>
              <div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground 2xl:hidden">Claim</p><p className="mt-1 break-words text-sm leading-relaxed text-muted-foreground 2xl:mt-0">{entry.claim}</p></div>
              <div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground 2xl:hidden">Evidence</p><p className="mt-1 break-words text-sm leading-relaxed text-muted-foreground 2xl:mt-0">{entry.evidenceType}</p></div>
              <div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground 2xl:hidden">Scope</p><span className={`mt-2 inline-flex w-fit rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] 2xl:mt-0 ${statusStyle[entry.status]}`}>{statusLabel[entry.status]}</span></div>
              <a href={entry.href} className="luxury-action luxury-action-compact w-full 2xl:w-auto">Inspect <ArrowUpRight className="size-3.5 text-accent" /></a>
            </div></article>)}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
