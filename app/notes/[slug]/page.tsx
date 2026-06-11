import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleShell } from '@/components/article-shell'
import { getTechnicalNote, technicalNotes } from '@/src/data/note-content'

export const dynamicParams = false
export function generateStaticParams() { return technicalNotes.map((note) => ({ slug: note.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const note = getTechnicalNote(slug); return note ? { title: note.title, description: note.dek } : {} }

export default async function TechnicalNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = getTechnicalNote(slug)
  if (!note) notFound()
  return <ArticleShell eyebrow="Technical Note" title={note.title} dek={note.dek} meta={`${note.date} · ${note.readTime}`}>{note.sections.map((section) => <section key={section.heading} className="rounded-xl border border-border bg-card/55 p-6 sm:p-8"><h2 className="font-heading text-3xl tracking-tight text-foreground">{section.heading}</h2><div className="mt-5 space-y-4">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>)}</div>{section.bullets ? <ul className="mt-5 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{bullet}</li>)}</ul> : null}{section.links ? <div className="mt-6 grid gap-3">{section.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="luxury-action w-full justify-between text-left sm:justify-start"><span>{link.label}{link.note ? <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{link.note}</span> : null}</span><span className="shrink-0 text-accent">↗</span></a>)}</div> : null}</section>)}</ArticleShell>
}
