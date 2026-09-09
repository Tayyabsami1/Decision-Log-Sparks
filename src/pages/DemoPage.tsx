import { cn } from '@/lib/utils'
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

export default function DemoPage() {
  const [decisions, setDecisions] = useState<Decision[]>(sampleDecisions)
  const [selectedId, setSelectedId] = useState(sampleDecisions[0].id)
  const [query, setQuery] = useState('')
  const [team, setTeam] = useState('All teams')
  const [mode, setMode] = useState<'decisions' | 'memory'>('decisions')
  const [notice, setNotice] = useState('')

  const normalizedQuery = query.toLowerCase().trim()
  const filteredDecisions = decisions.filter((decision) => {
    const matchesTeam = team === 'All teams' || decision.team === team
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
    setTeam('All teams')
    setMode('decisions')
    setNotice('Decision saved. The why is here when you need it.')
  }

  function openDecision(decision: Decision) {
    setSelectedId(decision.id)
    setQuery('')
    setTeam('All teams')
    setMode('decisions')
    setNotice('')
  }

  function changeMode(nextMode: 'decisions' | 'memory') {
    setMode(nextMode)
    setNotice('')
  }

  function clearFilters() {
    setQuery('')
    setTeam('All teams')
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
    <div className="min-h-screen bg-[#f7f8f4]">
      <a
        className={cn(
          'fixed top-3 left-3 z-60 py-3 px-4 rounded-md bg-background text-foreground',
          '-translate-y-[200%] focus:translate-y-0',
        )}
        href="#workspace-main"
      >
        Skip to workspace
      </a>
      <header
        className={cn(
          'flex items-center gap-6 [padding:22px_max(24px,_calc((100vw_-_1240px)_/_2))]',
          'border-b border-b-line-soft bg-white max-[760px]:py-4.5 max-[760px]:px-5.5',
          'max-[760px]:gap-3',
        )}
      >
        <Brand />
        <span
          className={cn(
            'border-l border-l-line-soft pl-6 text-[9px] leading-normal font-mono',
            'tracking-[1px] text-[#868d79] max-[760px]:hidden',
          )}
        >
          SAMPLE WORKSPACE
        </span>
        <Link
          to="/"
          className="flex items-center gap-2 ml-auto text-[12px] py-2 hover:text-[#a5751f]"
        >
          <ArrowLeft size={15} />
          <span>Back to product</span>
        </Link>
      </header>
      <div
        className={cn(
          'flex justify-center items-center gap-4.5 py-3 px-6 bg-[#f3efdf] border-b',
          'border-b-[#e9e3cb] text-[#7c714c] text-[11px] max-[760px]:items-start',
          'max-[760px]:flex-col max-[760px]:gap-[5px] max-[760px]:text-[10px]',
          'max-[760px]:leading-[1.6] max-[760px]:py-3 max-[760px]:px-5.5',
        )}
      >
        <span className="flex items-center gap-2 font-semibold">
          <Sparkles size={14} />
          Your team’s memory, in action.
        </span>
        <span>Explore, create, and update decisions. Changes reset on refresh.</span>
      </div>
      <main
        className={cn(
          'max-w-322 mx-auto pt-11 px-6 pb-0 max-[760px]:pt-7.5 max-[760px]:px-4.5',
          'max-[760px]:pb-0',
        )}
        id="workspace-main"
        tabIndex={-1}
      >
        <div
          className={cn(
            'flex items-center justify-between gap-6 mb-7.5 max-[760px]:items-start',
            'max-[760px]:flex-col max-[760px]:gap-5',
          )}
        >
          <div>
            <div
              className={cn(
                'flex items-center gap-3 text-[#777b6c] text-[10px] leading-[1.7] font-mono',
                'tracking-[1.3px]',
              )}
            >
              ACME WORKSPACE
            </div>
            <h1
              className={cn(
                'text-[clamp(26px,_3vw,_36px)] leading-[1.3] font-semibold tracking-[-1.3px]',
                'mt-2.5 max-[760px]:text-[30px]',
              )}
            >
              A little context.
              <br className="hidden max-[640px]:inline" /> A lot of clarity.
            </h1>
            <p className="text-[13px] text-text-soft mt-2.5 leading-[1.7]">
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
          className="flex items-center gap-2 min-h-7 text-[#657b4d] text-[12px] not-empty:py-3"
          role="status"
        >
          {notice && (
            <>
              <Check size={14} />
              {notice}
            </>
          )}
        </div>
        {mode === 'decisions' ? (
          <div
            className={cn(
              'grid grid-cols-[330px_minmax(0,_1fr)] items-start gap-5.5',
              'max-[1000px]:grid-cols-[275px_minmax(0,_1fr)] max-[1000px]:gap-4',
              'max-[760px]:grid-cols-1',
            )}
          >
            {selectedDecision && (
              <a
                className={cn(
                  'hidden max-[760px]:block max-[760px]:py-2.5 max-[760px]:text-[12px]',
                  'max-[760px]:text-[#7c642f]',
                )}
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
            {selectedDecision ? (
              <DecisionDetail
                decision={selectedDecision}
                onStatusChange={updateDecisionStatus}
              />
            ) : (
              <section
                className={cn(
                  'border border-line-soft rounded-lg bg-white min-w-0 wrap-anywhere',
                  'shadow-[0_4px_14px_#29371803] py-11 px-5.5 text-center text-[#879276]',
                  'max-[760px]:scroll-mt-5',
                )}
                aria-label="Decision details"
              >
                <h2 className="text-[15px] font-semibold">
                  Your next answer is a search away.
                </h2>
                <p className="text-[12px] leading-[1.7] mt-2.5 mx-0 mb-5.5">
                  Clear the filters or search for another decision to see its context.
                </p>
              </section>
            )}
          </div>
        ) : (
          <WorkspaceMemory onOpenDecision={openDecision} />
        )}
        <footer className="flex justify-between gap-5 py-7 px-0 text-[#8b957e] text-[10px]">
          <span>Sample data. Real possibilities.</span>
          <Link className="flex gap-1.5 items-center text-[#677750]" to="/">
            About Decision Log
            <ArrowUpRight size={13} />
          </Link>
        </footer>
      </main>
    </div>
  )
}
