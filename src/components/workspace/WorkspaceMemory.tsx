import { cn } from '@/lib/utils'
import { MemoryPanel } from '@/components/MemoryPanel'
import type { Decision } from '@/data/decisions'

interface WorkspaceMemoryProps {
  onOpenDecision: (decision: Decision) => void
}

export function WorkspaceMemory({ onOpenDecision }: WorkspaceMemoryProps) {
  return (
    <section
      className={cn(
        'grid grid-cols-[0.7fr_1.3fr] gap-[55px] items-start pt-5 pb-12.5',
        'max-[1000px]:gap-7.5 max-[1000px]:grid-cols-[0.65fr_1fr]',
        'max-[760px]:grid-cols-1 max-[760px]:pt-2.5 max-[760px]:gap-6',
      )}
    >
      <div>
        <div
          className={cn(
            'flex items-center gap-3 text-[#777b6c] text-[10px] leading-[1.7] font-mono',
            'tracking-[1.3px]',
          )}
        >
          A QUESTION WORTH ASKING
        </div>
        <h2
          className={cn(
            'mt-4.5 text-[32px] font-semibold tracking-[-1.2px] leading-[1.25]',
            'max-[760px]:text-[28px]',
          )}
        >
          The answer is in the context.
        </h2>
        <p className="mt-5 text-[14px] leading-[1.9] text-text-soft">
          Choose an example question to explore an answer grounded in this sample
          workspace. Open the source to see the original decision.
        </p>
        <span className="block mt-6 text-[#89937a] text-[11px] leading-[1.8]">
          These are curated sample answers, not a live AI service.
        </span>
      </div>
      <MemoryPanel onOpenDecision={onOpenDecision} />
    </section>
  )
}
