import { Mail, Download, ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { contact, links } from '@/src/data/portfolio'

/**
 * ContactSection — heading, copy, and contact buttons. Each button renders
 * only when its value is present in the data file (no empty/broken links).
 */
export function ContactSection() {
  const actions = [
    links.researchEmail
      ? {
          key: 'research',
          label: 'Discuss Research',
          href: `mailto:${links.researchEmail}?subject=${encodeURIComponent(contact.researchEmailSubject)}`,
          icon: <Mail className="size-4" />,
          external: false,
        }
      : null,
    links.email
      ? {
          key: 'email',
          label: 'General Email',
          href: `mailto:${links.email}`,
          icon: <Mail className="size-4" />,
          external: false,
        }
      : null,
    links.linkedin
      ? {
          key: 'linkedin',
          label: 'LinkedIn',
          href: links.linkedin,
          icon: <LinkedinIcon className="size-4" />,
          external: true,
        }
      : null,
    links.github
      ? {
          key: 'github',
          label: 'GitHub',
          href: links.github,
          icon: <GithubIcon className="size-4" />,
          external: true,
        }
      : null,
    links.resume
      ? {
          key: 'resume',
          label: 'Download Résumé',
          href: links.resume,
          icon: <Download className="size-4" />,
          external: true,
        }
      : null,
  ].filter(Boolean) as {
    key: string
    label: string
    href: string
    icon: React.ReactNode
    external: boolean
  }[]

  return (
    <Section id="contact">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="text-balance font-heading text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {contact.text}
          </p>

          {actions.length > 0 ? (
            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
              {actions.map((a) => (
                <a
                  key={a.key}
                  href={a.href}
                  {...(a.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="luxury-action w-full sm:w-auto"
                >
                  {a.icon}
                  {a.label}
                  {a.external ? (
                    <ArrowUpRight className="size-3.5 text-muted-foreground" />
                  ) : null}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </Reveal>
    </Section>
  )
}
