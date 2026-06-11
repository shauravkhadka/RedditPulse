import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { ArticleShell } from '@/components/article-shell'
import { CaseStudyVisual } from '@/components/case-study-visual'
import { ProofGallery } from '@/components/proof-gallery'
import { SystemFlowDiagram } from '@/components/system-flow-diagram'
import { caseStudies, getCaseStudy } from '@/src/data/case-studies'

export const dynamicParams = false

export function generateStaticParams() { return caseStudies.map((study) => ({ slug: study.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  return study ? { title: study.title, description: study.dek } : {}
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  const publicLinks = [['Repository', study.links.repositoryUrl], ['Live demo', study.links.demoUrl], ['Video', study.links.videoUrl]].filter(([, url]) => Boolean(url)) as [string, string][]

  return (
    <ArticleShell eyebrow={study.category} title={study.title} dek={study.dek} meta={study.status}>
      <CaseStudyVisual visual={study.visual} />
      <section className="premium-surface p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Scope</p>
        <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground">Role and problem</h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground"><span className="font-medium text-foreground">My role:</span> {study.role}</p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{study.problem}</p>
      </section>
      <section>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Architecture</p>
        <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground">System flow</h2>
        <div className="mt-6"><SystemFlowDiagram steps={study.architecture} /></div>
      </section>
      <section>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Evidence</p>
        <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground">Measured signals</h2>
        <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-3">{study.evidence.map((item) => <div key={`${item.value}-${item.label}`} className="premium-surface flex min-w-0 flex-col p-5"><p className="min-h-[2.8rem] break-words font-heading text-[clamp(1.75rem,5vw,2.35rem)] leading-[0.98] tracking-tight text-accent">{item.value}</p><p className="mt-3 text-sm font-medium text-foreground">{item.label}</p><p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{item.detail}</p></div>)}</div>
        {study.evidenceNote ? <p className="mt-5 rounded-xl border border-accent/20 bg-accent/[0.05] p-4 text-sm leading-relaxed text-muted-foreground"><span className="font-medium text-foreground">Public scope:</span> {study.evidenceNote}</p> : null}
      </section>
      <ProofGallery assets={study.proofAssets} />
      {publicLinks.length ? <section className="rounded-2xl border border-accent/20 bg-accent/[0.05] p-6 sm:p-8"><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Inspect the work</p><div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">{publicLinks.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="luxury-action w-full sm:w-auto">{label} <ArrowUpRight className="size-4" /></a>)}</div></section> : null}
      <div className="grid gap-4 xl:grid-cols-3">{[['Contribution', study.contribution], ['Lessons', study.lessons], ['Limitations', study.limitations]].map(([heading, items]) => <section key={heading as string} className="premium-surface flex h-full flex-col p-6 sm:p-7"><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{heading as string}</p><ul className="mt-5 space-y-3">{(items as string[]).map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{item}</li>)}</ul></section>)}</div>
      <section><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Stack</p><ul className="mt-4 flex flex-wrap gap-2">{study.tags.map((tag) => <li key={tag} className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">{tag}</li>)}</ul></section>
    </ArticleShell>
  )
}
