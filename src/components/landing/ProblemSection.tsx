import type { ReactNode } from 'react'
import {
  ArrowRight,
  BookOpen,
  Clock3,
  FileText,
  GitBranch,
  Hash,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from './SectionLabel'

const contextSources = [
  'Slack',
  'Meetings',
  'GitHub',
  'Jira',
  'Notion',
  'Someone’s memory',
]

export function ProblemSection() {
  return (
    <section
      className="border-y border-line-soft bg-surface-soft py-16 sm:py-24"
      id="problem"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-8 grid gap-6 md:mb-12 md:grid-cols-5 md:items-end md:gap-8 lg:gap-16">
          <div className="md:col-span-3">
            <SectionLabel number="01">THE CONTEXT GAP</SectionLabel>
            <h2
              className={cn(
                'mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance',
                'md:text-4xl lg:text-5xl',
              )}
            >
              The decision stays.
              <br />
              <span className="text-text-soft">The reason disappears.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-text-soft md:col-span-2">
            Your product is the sum of a thousand decisions. But the thinking behind them?
            Buried in a thread, lost in a meeting, or gone with the person who made the
            call.
          </p>
        </div>
        <div className="relative hidden gap-4 p-4 pb-24 sm:grid md:grid-cols-3 lg:gap-6">
          <ContextCard
            icon={Hash}
            title="Slack"
            metadata="12 weeks ago"
            quote="“Didn’t we already discuss this?”"
            className="-rotate-3"
          >
            <ContextExcerpt caption="148 replies. One missing answer." />
          </ContextCard>
          <ContextCard
            icon={GitBranch}
            title="GitHub"
            metadata="PR #284"
            quote={
              <>
                “Temporary workaround.
                <br />
                We’ll revisit this later.”
              </>
            }
            className="rotate-1 md:translate-y-4"
          >
            <code className="block bg-surface-soft p-3 font-mono text-xs leading-relaxed text-text-soft">
              // TODO: explain why
            </code>
          </ContextCard>
          <ContextCard
            icon={FileText}
            title="Meeting notes"
            quote="“Let’s go with option B.”"
            className="-rotate-1 md:rotate-3"
          >
            <ContextExcerpt caption="No alternatives. No owner. No why." />
          </ContextCard>
          <div
            className={cn(
              'absolute bottom-0 left-1/2 flex w-max max-w-full -translate-x-1/2',
              'items-center gap-3 rounded-lg border border-border bg-card px-6 py-4',
              'text-sm shadow-sm md:text-base',
            )}
          >
            <span
              className="grid size-8 shrink-0 place-items-center rounded-full bg-accent font-serif text-accent-foreground"
              aria-hidden="true"
            >
              ?
            </span>
            <span>“Why did we build it this way?”</span>
            <span className="h-5 w-px bg-primary" aria-hidden="true" />
          </div>
        </div>
        <ul
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-text-soft sm:gap-4"
          aria-label="Where decision context gets scattered"
        >
          {contextSources.map((source, index) => (
            <li key={source} className="flex items-center gap-3 sm:gap-4">
              {index > 0 && (
                <ArrowRight className="size-3 text-muted-foreground" aria-hidden="true" />
              )}
              {source}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-4 border-t border-line-soft pt-7 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-5">
          <ProblemImpact icon={Clock3}>The same debate, again.</ProblemImpact>
          <ProblemImpact icon={Users}>A slow start for new teammates.</ProblemImpact>
          <ProblemImpact icon={BookOpen}>
            Knowledge that walks out the door.
          </ProblemImpact>
        </div>
      </div>
    </section>
  )
}

interface ContextCardProps {
  icon: LucideIcon
  title: string
  metadata?: string
  quote: ReactNode
  children: ReactNode
  className?: string
}

function ContextCard({
  icon: Icon,
  title,
  metadata,
  quote,
  children,
  className,
}: ContextCardProps) {
  return (
    <div
      className={cn(
        'min-w-0 rounded-lg border border-line-soft bg-card p-5 shadow-xs lg:p-6',
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <Icon className="size-4" aria-hidden="true" />
        <span>{title}</span>
        {metadata && (
          <span className="font-normal text-text-soft lg:ml-auto">{metadata}</span>
        )}
      </div>
      <p className="my-4 text-base leading-relaxed tracking-tight lg:my-5">{quote}</p>
      {children}
    </div>
  )
}

function ContextExcerpt({ caption }: { caption: string }) {
  return (
    <>
      <div className="space-y-2" aria-hidden="true">
        {Array.from({ length: 2 }, (_, index) => (
          <div key={index} className="h-1 w-5/6 rounded-xs bg-secondary" />
        ))}
      </div>
      <p className="mt-5 text-xs text-text-soft">{caption}</p>
    </>
  )
}

interface ProblemImpactProps {
  icon: LucideIcon
  children: ReactNode
}

function ProblemImpact({ icon: Icon, children }: ProblemImpactProps) {
  return (
    <span className="flex items-center gap-2 text-xs text-text-soft">
      <Icon className="size-4" aria-hidden="true" />
      {children}
    </span>
  )
}
