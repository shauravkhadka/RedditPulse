import { ArrowUpRight, BookOpen, Library, Sparkles, Store } from 'lucide-react'
import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { links, publications, writingSection, type Publication } from '@/src/data/portfolio'
import { cn } from '@/lib/utils'

const coverStyles: Record<Publication['cover'], string> = {
  amber: 'from-amber-300/35 via-amber-500/15 to-background border-amber-300/30',
  blue: 'from-sky-300/35 via-blue-500/15 to-background border-sky-300/30',
  rose: 'from-rose-300/35 via-pink-500/15 to-background border-rose-300/30',
  violet: 'from-violet-300/35 via-purple-500/15 to-background border-violet-300/30',
  emerald: 'from-emerald-300/35 via-teal-500/15 to-background border-emerald-300/30',
  slate: 'from-slate-300/30 via-slate-500/15 to-background border-slate-300/25',
  copper: 'from-orange-300/35 via-orange-600/15 to-background border-orange-300/30',
}

function BookCover({ publication, compact = false }: { publication: Publication; compact?: boolean }) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden rounded-lg border bg-gradient-to-br shadow-2xl shadow-black/25',
        coverStyles[publication.cover],
        compact ? 'aspect-[4/5] w-20 shrink-0 sm:w-24' : 'aspect-[4/5] w-full max-w-[15rem]',
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-0 w-2 border-r border-white/10 bg-black/20" />
      <div className="absolute -right-8 top-8 size-28 rounded-full border border-white/10" />
      <div className="absolute -right-3 top-16 size-20 rounded-full border border-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
      <div className={cn('absolute inset-0 flex flex-col justify-between', compact ? 'p-3 pl-4' : 'p-5 pl-7')}>
        <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/70">Independent publication</div>
        <div>
          <p className={cn('font-heading leading-[0.96] tracking-tight text-white', compact ? 'text-lg' : 'text-3xl')}>{publication.title}</p>
          <p className={cn('mt-2 font-mono uppercase tracking-[0.16em] text-white/75', compact ? 'text-[7px]' : 'text-[9px]')}>{publication.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

function ActionLink({ href, label, kind = 'secondary' }: { href: string; label: string; kind?: 'primary' | 'secondary' }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'luxury-action',
        kind === 'primary' ? 'luxury-action-primary' : '',
      )}
    >
      {label}
      <ArrowUpRight className="size-3.5" />
    </a>
  )
}

/** WritingSection — commercial publishing layer with direct purchase paths. */
export function WritingSection() {
  const featured = publications.find((publication) => publication.featured) ?? publications[0]
  const catalogue = publications.filter((publication) => publication !== featured)
  const profiles = [
    links.amazonAuthor ? { label: 'Shop Amazon Author Store', href: links.amazonAuthor, icon: <Store className="size-4" /> } : null,
    links.goodreads ? { label: 'Goodreads Author Profile', href: links.goodreads, icon: <Library className="size-4" /> } : null,
    links.coauthorAmazon ? { label: 'Browse collaborative titles', href: links.coauthorAmazon, icon: <BookOpen className="size-4" /> } : null,
  ].filter(Boolean) as { label: string; href: string; icon: React.ReactNode }[]

  return (
    <Section id="writing">
      <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:gap-16">
        <Reveal>
          <div className="xl:sticky xl:top-28">
            <SectionHeading eyebrow="Independent Publishing" title={writingSection.heading} intro={writingSection.intro} />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground/85">{writingSection.note}</p>
            <div className="mt-6 grid grid-cols-3 gap-2" aria-label="Publishing catalogue highlights">
              {[
                ['07', 'Works'],
                ['Amazon', 'Buy'],
                ['Goodreads', 'Discover'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-border bg-card/50 p-3">
                  <p className="font-mono text-xs text-accent">{value}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {profiles.map((profile) => (
                <a key={profile.label} href={profile.href} target="_blank" rel="noopener noreferrer" className="luxury-action w-full justify-between sm:w-auto">
                  {profile.icon}
                  {profile.label}
                  <ArrowUpRight className="size-3.5 text-accent" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <article className="relative overflow-hidden rounded-2xl border border-accent/25 bg-card/70 p-5 sm:p-7">
              <div className="absolute -right-24 -top-24 size-64 rounded-full bg-accent/[0.09] blur-3xl" aria-hidden="true" />
              <div className="relative grid items-center gap-7 md:grid-cols-[13rem_1fr]">
                <BookCover publication={featured} />
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    <Sparkles className="size-3" />
                    {writingSection.featureLabel}
                  </div>
                  <h3 className="mt-5 text-balance font-heading text-4xl leading-[0.98] tracking-tight text-foreground">{featured.title}</h3>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{featured.subtitle}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{featured.note}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ActionLink href={featured.amazonUrl} label={writingSection.featureCta} kind="primary" />
                    <ActionLink href={featured.goodreadsUrl} label="View on Goodreads" />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Catalogue</p>
                <h3 className="mt-3 font-heading text-3xl tracking-tight text-foreground">{writingSection.catalogueHeading}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{writingSection.catalogueIntro}</p>
              </div>
            </Reveal>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {catalogue.map((publication, index) => (
                <Reveal key={`${publication.title}-${publication.subtitle}`} delay={(index % 2) * 0.05} as="article">
                  <div className="group flex h-full min-w-0 gap-3 overflow-hidden rounded-xl sm:gap-4 border border-border bg-card/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-card/90 hover:shadow-xl hover:shadow-black/15">
                    <BookCover publication={publication} compact />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-center justify-between gap-3">
                        <p className="break-words font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-accent">{publication.role}</p>
                        <span className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground/50">{String(index + 2).padStart(2, '0')}</span>
                      </div>
                      <h4 className="mt-3 text-balance text-base font-medium leading-snug text-foreground">{publication.title}</h4>
                      <p className="mt-1 break-words font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground/75">{publication.subtitle}</p>
                      <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">{publication.note}</p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-4">
                        <a href={publication.amazonUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-foreground transition-colors hover:text-accent">
                          Buy on Amazon <ArrowUpRight className="size-3" />
                        </a>
                        <a href={publication.goodreadsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground">
                          Goodreads <ArrowUpRight className="size-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
