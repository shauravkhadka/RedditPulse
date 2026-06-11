/** SystemFlowDiagram — auto-fit premium grid that preserves readability for any step count. */
export function SystemFlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/55 p-5 shadow-[0_18px_54px_-40px_rgba(0,0,0,0.85)] sm:p-6">
      <div className="grid min-w-0 grid-cols-[repeat(auto-fit,minmax(min(100%,13.5rem),1fr))] gap-3">
        {steps.map((step, index) => <div key={`${step}-${index}`} className="group relative min-h-[8.75rem] min-w-0 overflow-hidden rounded-xl border border-border bg-background/45 p-4 transition-colors hover:border-accent/35 hover:bg-secondary/40"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{String(index + 1).padStart(2, '0')}</span><p className="mt-5 break-words text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/90">{step}</p>{index < steps.length - 1 ? <span className="absolute bottom-3 right-3 font-mono text-xs text-accent/55" aria-hidden="true">→</span> : null}</div>)}
      </div>
    </div>
  )
}
