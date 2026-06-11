import { ArrowUpRight } from 'lucide-react'
import { ProofMediaFrame } from '@/components/proof-media-frame'
import type { ProofAsset } from '@/src/data/case-studies'

export function ProofGallery({ assets }: { assets: ProofAsset[] }) {
  const published = assets.filter((asset) => asset.published)
  if (!published.length) return null
  return <section><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Published Evidence</p><h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground">Selected artifacts.</h2><p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">Charts, screenshots, and media artifacts supporting this case study.</p><div className="mt-6 grid gap-4 md:grid-cols-2">{published.map((asset) => <article key={`${asset.title}-${asset.src || asset.href}`} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card/60 shadow-[0_16px_48px_-38px_rgba(0,0,0,0.8)]"><ProofMediaFrame asset={asset} /><div className="flex flex-1 flex-col p-5"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{asset.kind} evidence</p><h3 className="mt-3 break-words text-base font-medium text-foreground">{asset.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{asset.caption}</p>{asset.href ? <a href={asset.href} target="_blank" rel="noopener noreferrer" className="luxury-action luxury-action-compact mt-5 w-fit">{asset.actionLabel || 'Open artifact'} <ArrowUpRight className="size-3.5" /></a> : null}</div></article>)}</div></section>
}
