import type { ReactNode } from 'react'
import { Check, GitBranch, Plus, Search, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from './SectionLabel'

export function WorkflowSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24" id="how-it-works">
      <div className="mb-8 sm:mb-12">
        <SectionLabel number="05">A SMALL HABIT. A LASTING ADVANTAGE.</SectionLabel>
        <h2
          className={cn(
            'mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance',
            'md:text-4xl lg:text-5xl',
          )}
        >
          Three steps.
          <br />
          <span className="text-text-soft">Months of context, saved.</span>
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3 md:gap-5 lg:gap-9">
        <WorkflowStep
          number="01"
          title="Capture the moment."
          preview={
            <WorkflowField
              icon={Plus}
              trailing={<span className="text-muted-foreground">↵</span>}
            >
              New decision
            </WorkflowField>
          }
        >
          Record the decision while the reasoning is fresh. A few clear sentences are a
          great start.
        </WorkflowStep>
        <WorkflowStep
          number="02"
          title="Keep the context."
          preview={
            <div className="flex flex-wrap justify-center gap-2">
              <WorkflowTag icon={Check}>Reasoning</WorkflowTag>
              <WorkflowTag icon={GitBranch}>Alternatives</WorkflowTag>
              <WorkflowTag icon={Users}>Owner</WorkflowTag>
            </div>
          }
        >
          Attach the alternatives, assumptions, and consequences. Give the decision its
          whole story.
        </WorkflowStep>
        <WorkflowStep
          number="03"
          title="Find the why."
          preview={
            <WorkflowField
              icon={Search}
              trailing={<span className="size-1.5 rounded-full bg-text-soft" />}
            >
              “Why did we…”
            </WorkflowField>
          }
        >
          A month or a year later, the answer is still there. Your next decision starts
          one step ahead.
        </WorkflowStep>
      </div>
    </section>
  )
}

interface WorkflowStepProps {
  number: string
  title: string
  preview: ReactNode
  children: ReactNode
}

function WorkflowStep({ number, title, preview, children }: WorkflowStepProps) {
  return (
    <article className="min-w-0">
      <div
        className="relative hidden min-h-48 place-items-center rounded-lg border border-line-soft bg-surface-soft px-4 pt-4 pb-10 sm:grid lg:px-6"
        aria-hidden="true"
      >
        {preview}
        <span className="absolute bottom-3 left-4 font-mono text-xs leading-normal text-text-soft">
          {number}
        </span>
      </div>
      <span className="font-mono text-xs text-accent-foreground sm:hidden">{number}</span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight sm:mt-6">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-soft">{children}</p>
    </article>
  )
}

interface WorkflowFieldProps {
  icon: LucideIcon
  trailing: ReactNode
  children: ReactNode
}

function WorkflowField({ icon: Icon, trailing, children }: WorkflowFieldProps) {
  return (
    <span className="flex w-full min-w-0 items-center gap-2 rounded-md border border-border bg-card p-3 text-xs text-text-soft shadow-xs">
      <Icon className="size-4" />
      <span>{children}</span>
      <span className="ml-auto flex shrink-0">{trailing}</span>
    </span>
  )
}

interface WorkflowTagProps {
  icon: LucideIcon
  children: ReactNode
}

function WorkflowTag({ icon: Icon, children }: WorkflowTagProps) {
  return (
    <span className="flex items-center gap-1.5 rounded-md border border-border bg-card p-2 text-xs text-text-soft">
      <Icon className="size-3" />
      {children}
    </span>
  )
}
