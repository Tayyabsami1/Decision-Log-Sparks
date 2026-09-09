import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { displayDate, type Decision } from '@/data/decisions'

interface DecisionListProps {
  decisions: Decision[]
  selectedId: string
  onSelect: (id: string) => void
  onClearFilters: () => void
}

export function DecisionList({
  decisions,
  selectedId,
  onSelect,
  onClearFilters,
}: DecisionListProps) {
  return (
    <aside
      className={cn(
        'border border-line-soft rounded-lg bg-white overflow-hidden',
        'max-[760px]:max-h-77.5 max-[760px]:overflow-y-auto',
      )}
      aria-label="Decision list"
    >
      <div
        className={cn(
          'flex justify-between gap-3 py-4 px-5 border-b border-b-line-soft text-[10px]',
          'text-[#7d8670] max-[760px]:sticky max-[760px]:top-0 max-[760px]:bg-white',
          'max-[760px]:z-1',
        )}
      >
        <span>
          {decisions.length} {decisions.length === 1 ? 'decision' : 'decisions'}
        </span>
        <span className="text-[#929b85]">Newest first</span>
      </div>
      {decisions.length ? (
        decisions.map((decision) => (
          <button
            key={decision.id}
            className={cn(
              'w-full block p-5 text-left border-b border-b-[#edf0e6] border-l-3',
              'border-l-transparent hover:bg-[#f7f9f2] focus-visible:-outline-offset-4',
              'max-[760px]:py-4 max-[760px]:px-4.5',
              selectedId === decision.id && 'border-l-[#aa8a43] bg-[#f3f5ec]',
            )}
            onClick={() => onSelect(decision.id)}
            aria-pressed={selectedId === decision.id}
          >
            <div className="flex justify-between items-center gap-2">
              <span className="text-[#8e977f] text-[9px] leading-normal font-mono">
                {decision.id}
              </span>
              <span
                className={cn(
                  'flex items-center gap-[5px] text-[#748959] text-[9px]',
                  decision.status === 'Superseded' && 'text-[#909582]',
                )}
              >
                <span className="inline-block w-[5px] h-[5px] rounded-full bg-current" />
                {decision.status}
              </span>
            </div>
            <h2
              className={cn(
                'my-2.5 mx-0 text-[13px] font-semibold leading-[1.6] text-[#47513d]',
                'wrap-anywhere',
              )}
            >
              {decision.title}
            </h2>
            <p className="flex gap-2 text-[10px] text-[#8b937e]">
              {decision.team}
              <span>·</span>
              {displayDate(decision.date)}
            </p>
          </button>
        ))
      ) : (
        <div className="py-11 px-5.5 text-center text-[#879276]">
          <Search className="mt-0 mx-auto mb-4.5" />
          <h2 className="text-[15px] font-semibold">No decisions found.</h2>
          <p className="text-[12px] leading-[1.7] mt-2.5 mx-0 mb-5.5">
            Try a different word or team.
          </p>
          <Button variant="outline" onClick={onClearFilters}>
            Clear filters
          </Button>
        </div>
      )}
    </aside>
  )
}
