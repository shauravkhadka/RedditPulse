import { cn } from '@/lib/utils'
import type { ProofAsset } from '@/src/data/case-studies'

const ratioClass = {
  video: 'aspect-video',
  wide: 'aspect-[16/10]',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
}

/** ProofMediaFrame — locks dimensions so future assets cannot distort case-study layouts. */
export function ProofMediaFrame({ asset }: { asset: ProofAsset }) {
  const ratio = ratioClass[asset.aspect ?? 'video']
  const fit = asset.fit === 'cover' ? 'object-cover' : 'object-contain'
  const position = asset.position ?? 'center'
  if (asset.kind === 'image' && asset.src) return <div className={cn('grid w-full place-items-center overflow-hidden border-b border-border bg-background/70', ratio)}><img src={asset.src} alt={asset.alt || asset.title} loading={asset.priority ? 'eager' : 'lazy'} fetchPriority={asset.priority ? 'high' : 'auto'} decoding="async" className={cn('h-full w-full', fit)} style={{ objectPosition: position }} /></div>
  if (asset.kind === 'video' && asset.src) return <div className={cn('grid w-full place-items-center overflow-hidden border-b border-border bg-black/35', ratio)}><video className={cn('h-full w-full', fit)} controls preload="metadata" poster={asset.poster || undefined} playsInline><source src={asset.src} /></video></div>
  return null
}
