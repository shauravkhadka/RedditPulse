import { expertiseGroups } from '@/src/data/portfolio'
import { cn } from '@/lib/utils'

/** ExpertiseStrip — research identity first; applied evidence base second. */
export function ExpertiseStrip() {
  return (
    <section aria-label="Research priorities and applied evidence base" className="border-y border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-6 lg:px-8">
        <div className="mb-5 max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Research-Led Focus</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Scientific questions lead. Applied systems provide the evidence base for testing ideas honestly.</p>
        </div>
        <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
          {expertiseGroups.map((group, index) => (
            <div key={group.label} className={cn('rounded-xl border p-4 sm:p-5', index === 0 ? 'border-accent/30 bg-[linear-gradient(135deg,rgba(221,171,72,0.09),rgba(255,255,255,0.01)_70%)]' : 'border-border bg-background/25')}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{group.label}</p>
                <p className="text-xs leading-relaxed text-muted-foreground/80">{group.note}</p>
              </div>
              <ul className="mt-4 flex min-w-0 flex-wrap gap-2">
                {group.items.map((item) => <li key={item} className={cn('rounded-full border px-2.5 py-1 text-xs leading-relaxed transition-colors hover:text-foreground', index === 0 ? 'border-accent/18 bg-accent/[0.045] text-muted-foreground hover:border-accent/45' : 'border-border bg-card/55 text-muted-foreground hover:border-accent/35')}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
