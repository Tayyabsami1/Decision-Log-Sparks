import { Check } from 'lucide-react'
import { DemoLink } from '@/components/Brand'
import { cn } from '@/lib/utils'

export function FinalCallToAction() {
  return (
    <section className="border-t border-line-soft bg-surface-warm py-14 text-center sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <span className="text-4xl text-accent-foreground" aria-hidden="true">
          ✳
        </span>
        <h2
          className={cn(
            'mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance',
            'md:text-4xl lg:text-5xl',
          )}
        >
          Your team is already
          <br />
          making decisions.
          <br />
          <span className="text-text-soft">Start remembering them.</span>
        </h2>
        <p className="mt-6 mb-7 text-sm leading-relaxed text-text-soft">
          The next person to ask “why” will thank you.
        </p>
        <DemoLink className="hover:-translate-y-0.5" />
        <div className="mt-5 flex items-center justify-center gap-2 text-xs leading-relaxed text-text-soft">
          <Check className="size-3.5" aria-hidden="true" />
          No sign-up. Just a little clarity.
        </div>
      </div>
    </section>
  )
}
