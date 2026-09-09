import type { ReactNode } from 'react'
import { Check, GitBranch, Users, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from './SectionLabel'

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24" id="use-cases">
      <div className="mb-8 grid gap-6 md:mb-12 md:grid-cols-5 md:items-end md:gap-8 lg:gap-16">
        <div className="md:col-span-3">
          <SectionLabel number="04">LESS BACKTRACKING. MORE BUILDING.</SectionLabel>
          <h2
            className={cn(
              'mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance',
              'md:text-4xl lg:text-5xl',
            )}
          >
            Good context.
            <br />
            <span className="text-text-soft">Better momentum.</span>
          </h2>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-text-soft md:col-span-2">
          For the engineer tracing a workaround. The PM revisiting a roadmap. The new
          teammate connecting the dots.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3 lg:gap-8">
        <BenefitCard
          icon={Zap}
          title="Move past the same debate."
          outcome="LESS “DIDN’T WE TRY THIS?”"
        >
          Find the last conversation before starting the next one. Build on what your team
          already knows.
        </BenefitCard>
        <BenefitCard
          icon={Users}
          title="Make day one make sense."
          outcome="FASTER TIME TO CONTEXT"
        >
          Give new teammates the reasoning behind the system, not just a map of what’s
          there.
        </BenefitCard>
        <BenefitCard
          icon={GitBranch}
          title="Let knowledge outlast tenure."
          outcome="A MEMORY THAT STAYS"
        >
          People move on. Their thinking shouldn’t disappear from the work they helped
          shape.
        </BenefitCard>
      </div>
      <div className="mt-8 flex items-start justify-center gap-2 text-xs leading-relaxed text-text-soft sm:items-center">
        <Check className="mt-0.5 size-4 sm:mt-0" aria-hidden="true" />
        <p>
          Better decisions start with shared context.{' '}
          <strong className="font-normal text-foreground">
            Give everyone the same starting point.
          </strong>
        </p>
      </div>
    </section>
  )
}

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  outcome: string
  children: ReactNode
}

function BenefitCard({ icon: Icon, title, outcome, children }: BenefitCardProps) {
  return (
    <article className="flex min-w-0 flex-col rounded-lg border border-line-soft p-6 lg:p-7">
      <div className="grid size-10 place-items-center rounded-lg border border-border bg-surface-warm text-accent-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-soft">{children}</p>
      <span className="mt-auto block pt-7 font-mono text-xs leading-relaxed tracking-wide text-text-soft">
        {outcome}
      </span>
    </article>
  )
}
