import { cn } from '@/lib/utils'
import { FileText } from 'lucide-react'
import { DecisionRecord } from '@/components/DecisionRecord'
import type { Decision } from '@/data/decisions'

interface DecisionDetailProps {
  decision: Decision
  onStatusChange: (status: Decision['status']) => void
}

export function DecisionDetail({ decision, onStatusChange }: DecisionDetailProps) {
  return (
    <section
      className={cn(
        'border border-line-soft rounded-lg bg-white min-w-0 wrap-anywhere',
        'shadow-[0_4px_14px_#29371803] max-[760px]:scroll-mt-5',
      )}
      id="selected-decision"
      tabIndex={-1}
      aria-label="Selected decision"
    >
      <div
        className={cn(
          'flex justify-between items-center py-2.5 px-6 border-b border-b-line-soft',
          'bg-[#fcfcfa] rounded-t-lg max-[760px]:px-4.5',
        )}
      >
        <span className="flex items-center gap-2 text-[10px] leading-normal font-mono text-[#8b947c]">
          <FileText size={14} />
          {decision.id}
        </span>
        <label className="flex items-center gap-2.5 text-[10px] text-[#869076]">
          Status
          <select
            className={cn(
              '[padding:8px_32px_8px_12px] border border-border rounded-md bg-card',
              'text-foreground min-h-11 py-[5px] text-[11px]',
            )}
            value={decision.status}
            onChange={(event) => onStatusChange(event.target.value as Decision['status'])}
          >
            <option>Active</option>
            <option>Superseded</option>
          </select>
        </label>
      </div>
      <DecisionRecord key={decision.id} decision={decision} />
    </section>
  )
}
