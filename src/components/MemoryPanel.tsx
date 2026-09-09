import { cn } from '@/lib/utils'
import { useState } from 'react'
import { ArrowUpRight, Check, FileText, Sparkles } from 'lucide-react'
import {
  memoryQuestions,
  sampleDecisions,
  displayDate,
  type Decision,
} from '@/data/decisions'

export function MemoryPanel({
  onOpenDecision,
}: {
  onOpenDecision: (decision: Decision) => void
}) {
  const [question, setQuestion] = useState(0)
  const selected = memoryQuestions[question]
  const decision = sampleDecisions.find((d) => d.id === selected.decisionId)!
  return (
    <div
      className={cn(
        'min-w-0 border border-[#dde3d2] rounded-[10px] bg-white overflow-hidden',
        'shadow-[0_6px_24px_#293b1406]',
      )}
    >
      <div
        className={cn(
          'flex justify-between gap-3 items-center py-5 px-6 border-b',
          'border-b-line-soft max-[640px]:p-4.5',
        )}
      >
        <span
          className={cn(
            'flex gap-2.5 items-center text-[13px] font-semibold text-[#5f714b]',
            'max-[640px]:text-[12px] max-[640px]:gap-[7px]',
          )}
        >
          <Sparkles size={17} />
          Ask your memory
        </span>
        <span
          className={cn(
            'py-1 px-2 border border-line-soft rounded text-text-soft text-[9px]',
            'leading-[1.5] font-mono whitespace-nowrap max-[640px]:text-[8px]',
          )}
        >
          Sample answers
        </span>
      </div>
      <div
        className={cn(
          'grid gap-2 py-5.5 px-6 bg-[#fafbf7] border-b border-b-line-soft',
          'max-[640px]:p-4.5',
        )}
        aria-label="Example questions"
      >
        {memoryQuestions.map((q, i) => (
          <button
            className={cn(
              'flex items-center justify-between gap-3.5 border border-[#e2e7d9] rounded-md',
              'text-left py-3 px-3.5 bg-white text-[12px] leading-[1.6] text-[#7e8a6c]',
              'hover:bg-[#f2f5e9] hover:text-[#53673c] hover:border-[#bfcba9]',
              'aria-pressed:bg-[#f2f5e9] aria-pressed:text-[#53673c]',
              'aria-pressed:border-[#bfcba9]',
            )}
            key={q.question}
            aria-pressed={question === i}
            onClick={() => setQuestion(i)}
          >
            {q.question}
            <ArrowUpRight size={15} />
          </button>
        ))}
      </div>
      <div
        className={cn(
          'flex gap-3.5 py-7 px-6 max-[640px]:py-5.5 max-[640px]:px-4.5',
          'max-[640px]:gap-2.5',
        )}
        aria-live="polite"
      >
        <div
          className={cn(
            'grid place-items-center h-7.5 w-7.5 shrink-0 bg-[#f5edda] text-[#a37c28]',
            'border border-[#eee2c4] rounded-[7px] max-[640px]:w-6 max-[640px]:h-6',
          )}
        >
          <Sparkles size={17} />
        </div>
        <div className="min-w-0">
          <p className="text-[13px] leading-[1.9] text-[#58664a]">{selected.answer}</p>
          <p className="text-[11px] text-[#879277] mt-4">{selected.note}</p>
          <button
            className={cn(
              'flex items-start gap-2.5 p-3.5 mt-5.5 w-full text-left border',
              'border-[#dfe6d4] rounded-md bg-[#f9fbf5] text-[#778964] hover:bg-[#eef3e6]',
              'hover:border-[#bacaa3] max-[640px]:p-2.5 max-[640px]:gap-[7px]',
            )}
            onClick={() => onOpenDecision(decision)}
          >
            <FileText className="mt-0.5 max-[640px]:hidden" size={17} />
            <span>
              <strong className="block text-[11px] leading-[1.7] font-semibold">
                {decision.id} · {decision.title}
              </strong>
              <small className="block text-[10px] mt-1.5 text-[#929d85]">
                {decision.owner} · {displayDate(decision.date)}
              </small>
            </span>
            <ArrowUpRight className="mt-0.5 ml-auto" size={15} />
          </button>
          <div className="flex items-center gap-1.5 mt-4.5 text-[9px] text-[#88997a]">
            <Check size={13} />
            Backed by a decision, not a guess.
          </div>
        </div>
      </div>
    </div>
  )
}
