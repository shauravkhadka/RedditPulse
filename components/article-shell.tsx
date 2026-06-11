import type { ReactNode } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

/** ArticleShell — editorial case-study shell with premium spacing and article-safe navigation. */
export function ArticleShell({ eyebrow, title, dek, meta, children }: { eyebrow: string; title: string; dek: string; meta: string; children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden px-5 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.13_75/0.10),transparent_64%)]" aria-hidden="true" />
        <article className="relative mx-auto max-w-5xl">
          <a href="/#work" className="luxury-action luxury-action-compact">← Back to work</a>
          <header className="mt-10 max-w-3xl">
            <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-accent sm:text-xs">{eyebrow}</p>
            <h1 className="mt-5 text-balance font-heading text-[clamp(3rem,9vw,5rem)] leading-[0.96] tracking-tight text-foreground">{title}</h1>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{dek}</p>
            <p className="mt-5 max-w-full break-words font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground sm:text-xs">{meta}</p>
          </header>
          <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  )
}
