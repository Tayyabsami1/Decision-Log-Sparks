import { ArrowDown, Check } from 'lucide-react'
import { DemoLink } from '@/components/Brand'
import { LandingSections } from '@/components/LandingSections'
import { cn } from '@/lib/utils'

export default function ProductPage() {
  return (
    <div>
      <a
        className={cn(
          'fixed top-3 left-3 z-50 rounded-md bg-background px-4 py-3 text-foreground',
          '-translate-y-32 focus:translate-y-0',
        )}
        href="#main-content"
      >
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1}>
        <section
          className={cn(
            'mx-auto max-w-6xl px-6 pt-16 pb-10 text-center',
            'bg-radial from-accent/60 to-background to-70%',
            'sm:px-8 sm:pt-20 sm:pb-20 md:pt-24 lg:pt-32',
          )}
        >
          <div
            className={cn(
              'flex items-center justify-center gap-2 font-mono text-xs leading-relaxed',
              'tracking-wide text-text-soft sm:tracking-widest',
            )}
          >
            <span
              className="text-2xl leading-none text-accent-foreground"
              aria-hidden="true"
            >
              ✳
            </span>{' '}
            THE MEMORY BEHIND YOUR MOMENTUM
          </div>
          <h1
            className={cn(
              'my-6 text-4xl leading-tight font-semibold tracking-tighter text-foreground',
              'sm:text-6xl md:text-7xl lg:text-8xl',
            )}
          >
            Keep the why.
            <br />
            <span className="text-text-soft">Move forward.</span>
          </h1>
          <p
            className={cn(
              'mx-auto mt-6 max-w-3xl text-base leading-relaxed text-text-soft',
              'sm:text-lg sm:leading-relaxed',
            )}
          >
            The decision made sense. Make sure it still does six months later.
            <br className="hidden sm:block" /> Keep the reasoning, trade-offs, and context
            in one place your whole team can find.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
            <DemoLink className="h-12 px-6 hover:-translate-y-0.5" />
            <a
              className={cn(
                'inline-flex items-center gap-2 py-3 text-sm font-semibold',
                'hover:text-accent-foreground',
              )}
              href="#how-it-works"
            >
              See how it works <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div
            className={cn(
              'mt-4 flex flex-wrap justify-center gap-3 text-xs text-text-soft',
              'sm:gap-5',
            )}
          >
            <span className="flex gap-2 items-center">
              <Check className="size-3.5" aria-hidden="true" /> No sign-up required
            </span>
            <span className="flex gap-2 items-center">
              <Check className="size-3.5" aria-hidden="true" /> Real decisions. Real
              context.
            </span>
          </div>
        </section>
        <LandingSections />
      </main>
    </div>
  )
}
