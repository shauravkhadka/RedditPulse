'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, Download, Radar, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GraphNetwork } from '@/components/graph-network'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { links, profile } from '@/src/data/portfolio'

/** Hero — research-first identity with engineering execution as evidence. */
export function Hero() {
  const reduce = useReducedMotion()
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
  const item = { hidden: { opacity: 0, y: reduce ? 0 : 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } }

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-glow" aria-hidden="true" />
      <div className="absolute inset-0 opacity-65"><GraphNetwork className="size-full" /></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-background" aria-hidden="true" />
      <motion.div className="relative mx-auto grid w-full max-w-6xl min-w-0 items-center gap-10 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-14" variants={container} initial="hidden" animate="visible">
        <div className="min-w-0 max-w-3xl">
          <motion.div variants={item} className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-accent sm:text-[11px] sm:tracking-[0.17em]"><span className="relative flex size-2 shrink-0" aria-hidden="true"><span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" /><span className="relative inline-flex size-2 rounded-full bg-accent" /></span><span className="break-words">{profile.availability}</span></motion.div>
          <motion.p variants={item} className="mt-7 font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-accent sm:mt-8 sm:text-xs sm:tracking-[0.25em]">{profile.title}</motion.p>
          <motion.h1 variants={item} className="mt-5 break-words font-heading text-[clamp(3.4rem,14vw,5.5rem)] leading-[0.94] tracking-tight text-foreground sm:mt-6">{profile.name}</motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-foreground/95 sm:mt-7 sm:text-3xl">{profile.headline}</motion.p>
          <motion.p variants={item} className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.supporting}</motion.p>
          <motion.p variants={item} className="mt-4 break-words font-mono text-xs leading-relaxed text-muted-foreground/80 sm:text-sm">{profile.location} · {profile.microCopy}</motion.p>
          <motion.div variants={item} className="mt-8 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center">
            <Button size="lg" nativeButton={false} className="h-11 w-full justify-center px-5 text-sm sm:w-auto" render={<a href="#research" />}>Explore Research Directions<ArrowDown className="size-4" /></Button>
            <Button size="lg" variant="outline" nativeButton={false} className="h-11 w-full justify-center px-5 text-sm sm:w-auto" render={<a href="#work" />}>View Applied Systems</Button>
            {links.resume ? <Button size="lg" variant="ghost" nativeButton={false} className="h-11 w-full justify-center px-5 text-sm sm:w-auto" render={<a href={links.resume} target="_blank" rel="noopener noreferrer" />}><Download className="size-4" />Résumé</Button> : null}
          </motion.div>
          <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-4 gap-y-3 text-sm text-muted-foreground">
            <a href="#evidence" className="inline-flex items-center gap-2 transition-colors hover:text-accent">Open evidence index ↗</a>
            {links.github ? <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent"><GithubIcon className="size-4" />Inspect GitHub ↗</a> : null}
            {links.linkedin ? <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent"><LinkedinIcon className="size-4" />LinkedIn ↗</a> : null}
          </motion.div>
        </div>
        <motion.aside variants={item} className="mx-auto w-full max-w-[17rem] min-w-0 xl:max-w-none" aria-label="Portrait and research focus">
          <div className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-card/65 p-2 shadow-2xl shadow-black/25">
            <div className="absolute -right-20 -top-20 size-52 rounded-full bg-accent/[0.14] blur-3xl" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-background/60"><img src={profile.portrait} alt={`Portrait of ${profile.name}`} width="800" height="1000" fetchPriority="high" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]" /></div>
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/10 bg-background/80 p-3 backdrop-blur-md"><p className="text-xs leading-relaxed text-foreground">{profile.location}</p><p className="mt-1 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-accent">Human behind the research</p></div>
          </div>
          <div className="mt-4 rounded-xl border border-border bg-card/45 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Research-led systems focus</p><Radar className="size-4 shrink-0 text-accent" /></div>
            <div className="mt-4 space-y-3">{profile.signals.map((signal) => <div key={signal.label} className="border-t border-border pt-3 first:border-t-0 first:pt-0"><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground/75">{signal.label}</p><p className="mt-1.5 text-xs leading-relaxed text-foreground/90">{signal.value}</p></div>)}</div>
            <p className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground"><Sparkles className="size-3.5 shrink-0 text-accent" />Evidence before decoration.</p>
          </div>
        </motion.aside>
      </motion.div>
      <motion.a href="#research" aria-label="Scroll to research directions" className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground lg:flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }}><span className="font-mono uppercase tracking-[0.2em]">Research</span><motion.span animate={reduce ? {} : { y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}><ArrowDown className="size-3.5" /></motion.span></motion.a>
    </section>
  )
}
