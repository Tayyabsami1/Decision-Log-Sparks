import { cn } from '@/lib/utils'
import { BookOpen, Search, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dropdown } from '@/components/Dropdown'
import { Mode, Team } from '@/types/demo'

const teamFilterOptions = Object.values(Team).map((team) => ({
  label: team,
  value: team,
}))

interface WorkspaceControlsProps {
  mode: Mode
  decisionCount: number
  query: string
  team: Team
  onModeChange: (mode: Mode) => void
  onQueryChange: (query: string) => void
  onTeamChange: (team: Team) => void
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
          variant={mode === Mode.Decisions ? 'secondary' : 'ghost'}
          onClick={() => onModeChange(Mode.Decisions)}
          aria-pressed={mode === Mode.Decisions}
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
          variant={mode === Mode.Memory ? 'secondary' : 'ghost'}
          onClick={() => onModeChange(Mode.Memory)}
          aria-pressed={mode === Mode.Memory}
        >
          <Sparkles />
          Ask your memory
        </Button>
      </div>
      {mode === Mode.Decisions && (
        <div
          className={cn(
            'flex items-center gap-2.5 max-[760px]:w-full max-[760px]:grid',
            'max-[760px]:grid-cols-[minmax(0,_1fr)_150px] max-[380px]:grid-cols-1',
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
          <Dropdown
            label="Filter by team"
            placeholder={Team.All}
            options={teamFilterOptions}
            hideLabel
            className="w-37.5 max-[760px]:w-full"
            triggerClassName="min-h-11 max-[640px]:text-sm"
            value={team}
            onValueChange={(value) => {
              if (value !== null) onTeamChange(value)
            }}
          />
        </div>
      )}
    </div>
  )
}
