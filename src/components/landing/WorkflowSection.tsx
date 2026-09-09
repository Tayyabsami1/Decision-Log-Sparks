import { cn } from '@/lib/utils'
import { Check, GitBranch, Plus, Search, Users } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

export function WorkflowSection() {
  return (
    <section
      className="max-w-290 px-8 mx-auto max-[640px]:px-5.5 py-25 max-[640px]:py-15"
      id="how-it-works"
    >
      <div className="mb-11.5 max-[640px]:mb-8">
        <SectionLabel number="05">A SMALL HABIT. A LASTING ADVANTAGE.</SectionLabel>
        <h2
          className={cn(
            'text-[clamp(30px,_3.5vw,_44px)] leading-[1.16] font-semibold',
            'tracking-[-1.7px] text-balance mt-4.5',
          )}
        >
          Three steps.
          <br />
          <span className="text-[#838a78]">Months of context, saved.</span>
        </h2>
      </div>
      <div
        className={cn(
          'grid grid-cols-3 gap-9 max-[900px]:gap-5 max-[640px]:grid-cols-1',
          'max-[640px]:gap-8.5',
        )}
      >
        <article>
          <div
            className={cn(
              'h-[155px] relative grid place-items-center rounded-lg bg-surface-soft border',
              'border-line-soft p-6 max-[640px]:h-35 max-[480px]:hidden',
            )}
          >
            <span
              className={cn(
                'flex items-center gap-2.5 w-full p-3.5 bg-white border border-[#dfe4d6]',
                'rounded-[5px] text-[#747e65] text-[11px] shadow-[0_3px_10px_#253b1206]',
              )}
            >
              <Plus size={14} />
              New decision<span className="ml-auto text-[#b2baa8]">↵</span>
            </span>
            <span
              className={cn(
                'absolute bottom-3 left-3.5 text-[9px] leading-normal font-mono',
                'text-[#959e87]',
              )}
            >
              01
            </span>
          </div>
          <h3 className="mt-6 text-[18px] tracking-[-0.5px] font-semibold">
            Capture the moment.
          </h3>
          <p className="mt-3 text-text-soft text-[14px] leading-[1.8]">
            Record the decision while the reasoning is fresh. A few clear sentences are a
            great start.
          </p>
        </article>
        <article>
          <div
            className={cn(
              'h-[155px] relative grid place-items-center rounded-lg bg-surface-soft border',
              'border-line-soft p-6 max-[640px]:h-35 max-[480px]:hidden',
            )}
          >
            <div className="flex flex-wrap justify-center gap-2">
              <span
                className={cn(
                  'flex items-center gap-1.5 p-2 bg-white border border-[#e2e7d9] rounded-[5px]',
                  'text-[10px] text-[#75835f]',
                )}
              >
                <Check size={12} />
                Reasoning
              </span>
              <span
                className={cn(
                  'flex items-center gap-1.5 p-2 bg-white border border-[#e2e7d9] rounded-[5px]',
                  'text-[10px] text-[#75835f]',
                )}
              >
                <GitBranch size={12} />
                Alternatives
              </span>
              <span
                className={cn(
                  'flex items-center gap-1.5 p-2 bg-white border border-[#e2e7d9] rounded-[5px]',
                  'text-[10px] text-[#75835f]',
                )}
              >
                <Users size={12} />
                Owner
              </span>
            </div>
            <span
              className={cn(
                'absolute bottom-3 left-3.5 text-[9px] leading-normal font-mono',
                'text-[#959e87]',
              )}
            >
              02
            </span>
          </div>
          <h3 className="mt-6 text-[18px] tracking-[-0.5px] font-semibold">
            Keep the context.
          </h3>
          <p className="mt-3 text-text-soft text-[14px] leading-[1.8]">
            Attach the alternatives, assumptions, and consequences. Give the decision its
            whole story.
          </p>
        </article>
        <article>
          <div
            className={cn(
              'h-[155px] relative grid place-items-center rounded-lg bg-surface-soft border',
              'border-line-soft p-6 max-[640px]:h-35 max-[480px]:hidden',
            )}
          >
            <span
              className={cn(
                'flex items-center gap-2.5 w-full p-3.5 bg-white border border-[#dfe4d6]',
                'rounded-[5px] text-[#747e65] text-[11px] shadow-[0_3px_10px_#253b1206]',
              )}
            >
              <Search size={14} />
              “Why did we…”
              <span className="ml-auto text-[#b2baa8] h-1.5 w-1.5 rounded-full bg-[#8eaa69]" />
            </span>
            <span
              className={cn(
                'absolute bottom-3 left-3.5 text-[9px] leading-normal font-mono',
                'text-[#959e87]',
              )}
            >
              03
            </span>
          </div>
          <h3 className="mt-6 text-[18px] tracking-[-0.5px] font-semibold">
            Find the why.
          </h3>
          <p className="mt-3 text-text-soft text-[14px] leading-[1.8]">
            A month or a year later, the answer is still there. Your next decision starts
            one step ahead.
          </p>
        </article>
      </div>
    </section>
  )
}
