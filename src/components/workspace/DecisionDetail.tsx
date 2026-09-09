import { cn } from '@/lib/utils'
import { FileText } from 'lucide-react'
import { DecisionRecord } from '@/components/DecisionRecord'
import { Dropdown } from '@/components/Dropdown'
import type { Decision } from '@/data/decisions'

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Superseded', value: 'Superseded' },
]

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
          'gap-3 max-[380px]:flex-col max-[380px]:items-stretch',
        )}
      >
        <span className="flex items-center gap-2 text-[10px] leading-normal font-mono text-[#8b947c]">
          <FileText size={14} />
          {decision.id}
        </span>
        <Dropdown
          label="Status"
          placeholder="Select status"
          options={statusOptions}
          className="grid-cols-[auto_minmax(0,_1fr)] items-center gap-2.5"
          labelClassName="text-[10px] font-normal text-[#869076]"
          triggerClassName="min-h-11 min-w-34 text-xs max-[640px]:text-xs"
          value={decision.status}
          onValueChange={(value) => {
            if (value === 'Active' || value === 'Superseded') onStatusChange(value)
          }}
        />
      </div>
      <DecisionRecord key={decision.id} decision={decision} />
    </section>
  )
}
