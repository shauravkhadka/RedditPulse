import { BookOpen, Library, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { footer, links } from '@/src/data/portfolio'

/** Footer — professional links and author profiles where available. */
export function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    links.github ? { key: 'github', href: links.github, label: 'GitHub', icon: <GithubIcon className="size-4" /> } : null,
    links.linkedin ? { key: 'linkedin', href: links.linkedin, label: 'LinkedIn', icon: <LinkedinIcon className="size-4" /> } : null,
    (links.researchEmail || links.email) ? { key: 'email', href: `mailto:${links.researchEmail || links.email}`, label: 'Academic email', icon: <Mail className="size-4" /> } : null,
    links.amazonAuthor ? { key: 'amazon', href: links.amazonAuthor, label: 'Amazon Author Store', icon: <BookOpen className="size-4" /> } : null,
    links.goodreads ? { key: 'goodreads', href: links.goodreads, label: 'Goodreads Author Profile', icon: <Library className="size-4" /> } : null,
  ].filter(Boolean) as { key: string; href: string; label: string; icon: React.ReactNode }[]

  return (
    <footer className="border-t border-border px-6 py-12 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-xl tracking-tight text-foreground">{footer.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{footer.title}</p>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground/80">{footer.note}</p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          {socials.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2">
              {socials.map((s) => (
                <a key={s.key} href={s.href} aria-label={s.label} {...(s.key !== 'email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">{s.icon}</a>
              ))}
            </div>
          ) : null}
          <p className="font-mono text-xs text-muted-foreground/70">© {year} {footer.name}</p>
        </div>
      </div>
    </footer>
  )
}
