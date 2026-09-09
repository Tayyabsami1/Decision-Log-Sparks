import { cn } from '@/lib/utils'
import { BookOpen, Search, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface WorkspaceControlsProps {
  mode: 'decisions' | 'memory'
  decisionCount: number
  query: string
  team: string
  onModeChange: (mode: 'decisions' | 'memory') => void
  onQueryChange: (query: string) => void
  onTeamChange: (team: string) => void
}

export function WorkspaceControls({
  mode,
  decisionCount,
  query,
  team,
  onModeChange,
  onQueryChange,
  onTeamChange,
}: WorkspaceControlsProps) {
  return (
    <div
      className={cn(
        'flex justify-between items-center gap-4 flex-wrap max-[1000px]:items-stretch',
        'max-[760px]:w-full',
      )}
    >
      <div
        className={cn(
          'flex gap-1 p-1 bg-[#ebeee4] border border-[#e2e6d8] rounded-lg',
          'max-[760px]:w-full',
        )}
        aria-label="Workspace view"
      >
        <Button
          className={cn(
            'h-9.5 text-[12px] px-3.5 aria-pressed:bg-white aria-pressed:text-[#38472a]',
            'aria-pressed:shadow-[0_1px_3px_#29371812] max-[760px]:flex-1',
            'max-[760px]:h-11 max-[760px]:px-2 max-[760px]:text-[11px]',
          )}
          variant={mode === 'decisions' ? 'secondary' : 'ghost'}
          onClick={() => onModeChange('decisions')}
          aria-pressed={mode === 'decisions'}
        >
          <BookOpen />
          Decision log
          <span
            className={cn(
              'rounded py-[1px] px-[5px] bg-[#eaf0e1] text-[#6f7d5d] text-[10px]',
              'leading-normal font-mono',
            )}
          >
            {decisionCount}
          </span>
        </Button>
        <Button
          className={cn(
            'h-9.5 text-[12px] px-3.5 aria-pressed:bg-white aria-pressed:text-[#38472a]',
            'aria-pressed:shadow-[0_1px_3px_#29371812] max-[760px]:flex-1',
            'max-[760px]:h-11 max-[760px]:px-2 max-[760px]:text-[11px]',
          )}
          variant={mode === 'memory' ? 'secondary' : 'ghost'}
          onClick={() => onModeChange('memory')}
          aria-pressed={mode === 'memory'}
        >
          <Sparkles />
          Ask your memory
        </Button>
      </div>
      {mode === 'decisions' && (
        <div
          className={cn(
            'flex items-center gap-2.5 max-[760px]:w-full max-[760px]:grid',
            'max-[760px]:grid-cols-[minmax(0,_1fr)_125px] max-[380px]:grid-cols-1',
          )}
        >
          <div className="relative w-[225px] max-[760px]:w-auto max-[760px]:min-w-0">
            <Search
              className="absolute left-3 top-3 text-[#929b84] pointer-events-none"
              size={16}
            />
            <Input
              className="pl-9 h-11 bg-white text-base sm:text-sm"
              aria-label="Search decisions"
              placeholder="Find a decision…"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
            />
          </div>
          <select
            className={cn(
              'min-h-11 py-2 pr-8 pl-3 border border-border rounded-md bg-card',
              'text-foreground text-[13px] max-[760px]:text-[11px] max-[760px]:pr-4.5',
            )}
            aria-label="Filter by team"
            value={team}
            onChange={(event) => onTeamChange(event.target.value)}
          >
            <option>All teams</option>
            <option>Engineering</option>
            <option>Product</option>
            <option>Business</option>
          </select>
        </div>
      )}
    </div>
  )
}
