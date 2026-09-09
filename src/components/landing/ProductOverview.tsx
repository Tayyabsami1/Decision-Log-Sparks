import type { ReactNode } from 'react'
import { DemoLink } from '@/components/Brand'
import { cn } from '@/lib/utils'
import { SectionLabel } from './SectionLabel'

export function ProductOverview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24" id="product">
      <div className="mb-8 sm:mb-12">
        <SectionLabel number="02">A HOME FOR THE WHY</SectionLabel>
        <h2
          className={cn(
            'mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance',
            'md:text-4xl lg:text-5xl',
          )}
        >
          Not just what happened.
          <br />
          <span className="text-text-soft">Everything that made it make sense.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-soft">
          One living record. The context, the alternatives, the trade-offs.
          <br className="hidden sm:block" /> Together, exactly where the next person needs
          them.
        </p>
      </div>
      <div className="grid gap-7 md:grid-cols-3 md:gap-5 lg:gap-9">
        <OverviewFeature number="01" title="The full picture.">
          What changed. Who owned it. Which assumptions were true at the time.
        </OverviewFeature>
        <OverviewFeature number="02" title="The roads not taken.">
          See the alternatives and trade-offs, so you don’t have to retrace every step.
        </OverviewFeature>
        <OverviewFeature number="03" title="Context that keeps up.">
          Know what’s active, what’s been superseded, and what’s worth revisiting.
        </OverviewFeature>
        <DemoLink className="col-span-full justify-self-start hover:-translate-y-0.5">
          Explore a decision
        </DemoLink>
      </div>
    </section>
  )
}

interface OverviewFeatureProps {
  number: string
  title: string
  children: ReactNode
}

function OverviewFeature({ number, title, children }: OverviewFeatureProps) {
  return (
    <div className="border-t border-line-soft pt-6">
      <span className="font-mono text-xs leading-normal text-accent-foreground">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight md:mt-6">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-soft">{children}</p>
    </div>
  )
}
