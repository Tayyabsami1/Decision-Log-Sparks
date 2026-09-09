import { Check } from 'lucide-react'
import { DemoLink } from '@/components/Brand'
import { cn } from '@/lib/utils'

const demoBenefits = [
  'Realistic decisions and their full context',
  'Create decisions and update their status',
  'Illustrative answers with linked sources',
]

export function PricingSection() {
  return (
    <section
      className={cn(
        'mx-auto grid max-w-6xl items-center gap-8 px-6 pb-16',
        'sm:px-8 sm:pt-8 sm:pb-24 md:grid-cols-2 md:gap-10 lg:gap-24',
      )}
      id="pricing"
    >
      <div>
        <p className="font-mono text-xs leading-relaxed tracking-widest text-text-soft">
          START WITH A LITTLE CONTEXT
        </p>
        <h2
          className={cn(
            'mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance',
            'md:text-4xl lg:text-5xl',
          )}
        >
          Try the idea.
          <br />
          Feel the difference.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-soft">
          Explore a complete sample workspace, then add a decision of your own. No account
          or credit card needed.
        </p>
      </div>
      <div className="min-w-0 rounded-xl border border-border bg-surface-warm p-6 lg:p-8">
        <span className="block text-sm text-text-soft">Interactive demo</span>
        <strong className="mt-2 block text-4xl font-semibold tracking-tight">
          Free
          <span className="text-sm font-normal tracking-normal text-text-soft">
            {' '}
            to explore
          </span>
        </strong>
        <ul className="my-6 grid gap-4">
          {demoBenefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 text-xs leading-relaxed text-text-soft"
            >
              <Check className="mt-0.5 size-4" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
        <DemoLink className="hover:-translate-y-0.5" />
        <p className="mt-4 text-xs leading-relaxed text-text-soft">
          Demo changes reset on refresh. Paid plans aren’t available yet.
        </p>
      </div>
    </section>
  )
}
