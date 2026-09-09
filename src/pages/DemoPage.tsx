import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { Brand } from '@/components/Brand'
import { NewDecisionDialog } from '@/components/NewDecisionDialog'
import { sampleDecisions, type Decision } from '@/data/decisions'
import { WorkspaceControls } from '@/components/workspace/WorkspaceControls'
import { DecisionList } from '@/components/workspace/DecisionList'
import { DecisionDetail } from '@/components/workspace/DecisionDetail'
import { WorkspaceMemory } from '@/components/workspace/WorkspaceMemory'
import { cn } from '@/lib/utils'
import { Mode, Team } from '@/types/demo'

export default function DemoPage() {
  const [decisions, setDecisions] = useState<Decision[]>(sampleDecisions)
  const [selectedId, setSelectedId] = useState(sampleDecisions[0].id)
  const [query, setQuery] = useState('')
  const [team, setTeam] = useState<Team>(Team.All)
  const [mode, setMode] = useState<Mode>(Mode.Decisions)
  const [notice, setNotice] = useState('')

  const normalizedQuery = query.toLowerCase().trim()
  const filteredDecisions = decisions.filter((decision) => {
    const matchesTeam = team === Team.All || decision.team === team
    const searchableText = [
      decision.title,
      decision.context,
      decision.reasoning,
      decision.owner,
      decision.id,
    ].join(' ')

    return matchesTeam && searchableText.toLowerCase().includes(normalizedQuery)
  })
  const selectedDecision =
    filteredDecisions.find((decision) => decision.id === selectedId) ??
    filteredDecisions[0]

  function createDecision(decision: Decision) {
    setDecisions((current) => [decision, ...current])
    setSelectedId(decision.id)
    setQuery('')
    setTeam(Team.All)
    setMode(Mode.Decisions)
    setNotice('Decision saved. The why is here when you need it.')
  }

  function openDecision(decision: Decision) {
    setSelectedId(decision.id)
    setQuery('')
    setTeam(Team.All)
    setMode(Mode.Decisions)
    setNotice('')
  }

  function changeMode(nextMode: Mode) {
    setMode(nextMode)
    setNotice('')
  }

  function clearFilters() {
    setQuery('')
    setTeam(Team.All)
  }

  function selectDecision(id: string) {
    setSelectedId(id)
    setNotice('')
  }

  function updateDecisionStatus(status: Decision['status']) {
    setDecisions((current) =>
      current.map((decision) =>
        decision.id === selectedDecision?.id ? { ...decision, status } : decision,
      ),
    )
    setNotice(`Decision marked ${status.toLowerCase()}.`)
  }

  return (
    <div className="min-h-screen bg-surface-soft">
      <a
        className={cn(
          'fixed top-3 left-3 z-50 rounded-md bg-background px-4 py-3 text-foreground',
          '-translate-y-32 focus:translate-y-0',
        )}
        href="#workspace-main"
      >
        Skip to workspace
      </a>
      <header className="border-b border-line-soft bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-4 md:gap-6 md:px-6 md:py-6">
          <Brand />
          <span className="hidden border-l border-line-soft pl-6 font-mono text-xs leading-normal tracking-wide text-text-soft md:block">
            SAMPLE WORKSPACE
          </span>
          <Link
            to="/"
            className="ml-auto flex min-h-11 items-center gap-2 text-xs hover:text-accent-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>Back to product</span>
          </Link>
        </div>
      </header>
      <div
        className={cn(
          'flex flex-col items-start gap-1 border-b border-border bg-accent px-4 py-3',
          'text-xs leading-relaxed text-accent-foreground',
          'md:flex-row md:items-center md:justify-center md:gap-5 md:px-6',
        )}
      >
        <span className="flex items-center gap-2 font-semibold">
          <Sparkles className="size-4" aria-hidden="true" />
          Your team’s memory, in action.
        </span>
        <span>Explore, create, and update decisions. Changes reset on refresh.</span>
      </div>
      <main
        className="mx-auto max-w-7xl px-4 pt-8 md:px-6 md:pt-12"
        id="workspace-main"
        tabIndex={-1}
      >
        <div className="mb-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
          <div>
            <p className="font-mono text-xs leading-relaxed tracking-widest text-text-soft">
              ACME WORKSPACE
            </p>
            <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
              A little context.
              <br className="sm:hidden" /> A lot of clarity.
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-text-soft">
              The decisions that shaped the work, and the thinking behind them.
            </p>
          </div>
          <NewDecisionDialog onCreate={createDecision} />
        </div>
        <WorkspaceControls
          mode={mode}
          decisionCount={decisions.length}
          query={query}
          team={team}
          onModeChange={changeMode}
          onQueryChange={setQuery}
          onTeamChange={setTeam}
        />
        <div
          className="flex min-h-7 items-center gap-2 text-xs leading-relaxed text-text-soft not-empty:py-3"
          role="status"
        >
          {notice && (
            <>
              <Check className="size-4" aria-hidden="true" />
              {notice}
            </>
          )}
        </div>
        {mode === Mode.Decisions ? (
          <div className="grid items-start gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-6">
            {selectedDecision && (
              <a
                className="block py-3 text-xs text-accent-foreground md:hidden"
                href="#selected-decision"
              >
                Read selected decision ↓
              </a>
            )}
            <DecisionList
              decisions={filteredDecisions}
              selectedId={selectedDecision?.id ?? ''}
              onSelect={selectDecision}
              onClearFilters={clearFilters}
            />
            <div className="min-w-0 md:col-span-2 xl:col-span-3">
              {selectedDecision ? (
                <DecisionDetail
                  decision={selectedDecision}
                  onStatusChange={updateDecisionStatus}
                />
              ) : (
                <section
                  className={cn(
                    'min-w-0 scroll-mt-5 rounded-lg border border-line-soft bg-card',
                    'px-6 py-12 text-center text-text-soft shadow-xs wrap-anywhere',
                  )}
                  aria-label="Decision details"
                >
                  <h2 className="text-base font-semibold">
                    Your next answer is a search away.
                  </h2>
                  <p className="mt-3 mb-6 text-xs leading-relaxed">
                    Clear the filters or search for another decision to see its context.
                  </p>
                </section>
              )}
            </div>
          </div>
        ) : (
          <WorkspaceMemory onOpenDecision={openDecision} />
        )}
        <footer className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 py-7 text-xs text-text-soft">
          <span>Sample data. Real possibilities.</span>
          <Link
            className="flex min-h-11 items-center gap-2 hover:text-accent-foreground"
            to="/"
          >
            About Decision Log
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </footer>
      </main>
    </div>
  )
}
