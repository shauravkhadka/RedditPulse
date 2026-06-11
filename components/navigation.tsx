'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '@/src/data/portfolio'
import { cn } from '@/lib/utils'

/** Navigation — premium sticky bar with safe tablet breakpoint and article-aware links. */
export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(isHome ? 'home' : '')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const resolvedItems = useMemo(() => navItems.map((item) => ({ ...item, resolvedHref: isHome ? item.href : `/${item.href}` })), [isHome])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!isHome) { setActive(''); return }
    const ids = navItems.map((item) => item.href.replace('#', ''))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 })
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [isHome])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-colors duration-300', scrolled ? 'border-b border-border bg-background/88 backdrop-blur-xl' : 'border-b border-transparent')}>
      <motion.div className="absolute inset-x-0 top-0 h-px origin-left bg-accent" style={{ scaleX: progress }} aria-hidden="true" />
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8" aria-label="Primary">
        <a href={isHome ? '#home' : '/#home'} className="min-w-0 truncate font-mono text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50">{profile.name}</a>
        <ul className="hidden shrink-0 items-center gap-0.5 xl:flex">
          {resolvedItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = isHome && active === id
            return <li key={item.href}><a href={item.resolvedHref} aria-current={isActive ? 'page' : undefined} className={cn('relative rounded-md px-2.5 py-2 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 2xl:px-3 2xl:text-sm', isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}>{item.label}{isActive ? <motion.span layoutId="nav-active" className="absolute inset-x-2.5 -bottom-px h-px bg-accent 2xl:inset-x-3" transition={{ type: 'spring', stiffness: 350, damping: 30 }} /> : null}</a></li>
          })}
        </ul>
        <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex size-10 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 xl:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </nav>
      <AnimatePresence>
        {open ? <motion.div id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background/98 backdrop-blur-xl xl:hidden">
          <ul className="flex flex-col gap-1 px-6 py-6">
            {resolvedItems.map((item, index) => { const id = item.href.replace('#', ''); const isActive = isHome && active === id; return <motion.li key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + index * 0.04, duration: 0.25 }}><a href={item.resolvedHref} onClick={() => setOpen(false)} className={cn('flex items-center justify-between border-b border-border/60 px-1 py-4 text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50', isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}>{item.label}<span className={cn('size-1.5 rounded-full transition-colors', isActive ? 'bg-accent' : 'bg-transparent')} aria-hidden="true" /></a></motion.li> })}
          </ul>
        </motion.div> : null}
      </AnimatePresence>
    </header>
  )
}
