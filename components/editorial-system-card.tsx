import { ArrowUpRight } from 'lucide-react'
import type { EditorialSystem } from '@/src/data/editorial'

/** EditorialSystemCard — equal-height premium case-study card with visible evidence boundary. */
export function EditorialSystemCard({ system, index }: { system: EditorialSystem; index: number }) {
  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 shadow-[0_18px_60px_-36px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card/90 hover:shadow-[0_28px_72px_-38px_rgba(0,0,0,0.9)] sm:p-6 xl:p-7">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
      <div className="flex min-w-0 items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="break-words font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-accent">{system.category}</p>
          <p className="mt-2 w-fit max-w-full break-words rounded-full border border-border bg-background/45 px-2.5 py-1 font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">{system.evidenceStatus}</p>
        </div>
        <span className="shrink-0 font-mono text-[11px] tracking-[0.14em] text-muted-foreground/65">{String(index).padStart(2, '0')}</span>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mt-5 break-words text-balance text-xl font-medium leading-snug text-foreground">{system.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><span className="font-medium text-foreground/90">Problem:</span> {system.problem}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground"><span className="font-medium text-foreground/90">Contribution:</span> {system.contribution}</p>

        <div className="mt-auto pt-6">
          <p className="min-h-[3.15rem] break-words font-heading text-[clamp(1.65rem,3.1vw,2.2rem)] leading-[1.03] tracking-tight text-accent">{system.result}</p>
          <p className="mt-3 break-words font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">{system.role}</p>
          <ul className="mt-5 flex min-h-[3.2rem] flex-wrap content-start gap-2">{system.tags.map((tag) => <li key={tag} className="max-w-full break-words rounded-md border border-border bg-secondary/45 px-2.5 py-1 font-mono text-[10px] leading-relaxed text-muted-foreground">{tag}</li>)}</ul>
          <a href={system.caseStudyUrl} className="luxury-action mt-6 w-full justify-between sm:w-auto">Inspect case study <ArrowUpRight className="size-4 shrink-0" /></a>
        </div>
      </div>
    </article>
  )
}
