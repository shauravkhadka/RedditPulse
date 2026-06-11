import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-glow" aria-hidden="true" />
      <div className="relative max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Error 404
        </p>
        <h1 className="mt-4 font-heading text-5xl tracking-tight text-foreground sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          The page you are looking for doesn’t exist or may have moved. Let’s get
          you back to safe ground.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            nativeButton={false}
            className="h-11 px-5 text-sm"
            render={<Link href="/" />}
          >
            Back to home
          </Button>
        </div>
      </div>
    </main>
  )
}
