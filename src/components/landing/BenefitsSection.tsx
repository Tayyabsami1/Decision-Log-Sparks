import { cn } from '@/lib/utils'
import { Check, GitBranch, Users, Zap } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

export function BenefitsSection() {
  return (
    <section
      className="max-w-290 px-8 mx-auto max-[640px]:px-5.5 py-25 max-[640px]:py-15"
      id="use-cases"
    >
      <div
        className={cn(
          'mb-11.5 grid grid-cols-[1.35fr_1fr] items-end gap-15 max-[900px]:gap-7.5',
          'max-[640px]:mb-8 max-[640px]:grid-cols-1 max-[640px]:gap-0',
        )}
      >
        <div>
          <SectionLabel number="04">LESS BACKTRACKING. MORE BUILDING.</SectionLabel>
          <h2
            className={cn(
              'text-[clamp(30px,_3.5vw,_44px)] leading-[1.16] font-semibold',
              'tracking-[-1.7px] text-balance mt-4.5',
            )}
          >
            Good context.
            <br />
            <span className="text-[#838a78]">Better momentum.</span>
          </h2>
        </div>
        <p className="max-w-142.5 mt-5.5 text-[15px] leading-[1.85] text-text-soft">
          For the engineer tracing a workaround. The PM revisiting a roadmap. The new
          teammate connecting the dots.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 max-[900px]:gap-5 max-[640px]:grid-cols-1">
        <article className="p-7 border border-line-soft rounded-lg max-[900px]:p-5.5">
          <div
            className={cn(
              'w-10 h-10 grid place-items-center bg-surface-warm text-[#a7792a] border',
              'border-[#eee8db] rounded-lg',
            )}
          >
            <Zap className="w-[19px]" />
          </div>
          <h3 className="mt-6 text-[18px] tracking-[-0.5px] font-semibold">
            Move past the same debate.
          </h3>
          <p className="mt-3 text-text-soft text-[14px] leading-[1.8]">
            Find the last conversation before starting the next one. Build on what your
            team already knows.
          </p>
          <span
            className={cn(
              'block mt-7 text-[#848b78] text-[9px] leading-[1.6] font-mono',
              'tracking-[0.7px]',
            )}
          >
            LESS “DIDN’T WE TRY THIS?”
          </span>
        </article>
        <article className="p-7 border border-line-soft rounded-lg max-[900px]:p-5.5">
          <div
            className={cn(
              'w-10 h-10 grid place-items-center bg-surface-warm text-[#a7792a] border',
              'border-[#eee8db] rounded-lg',
            )}
          >
            <Users className="w-[19px]" />
          </div>
          <h3 className="mt-6 text-[18px] tracking-[-0.5px] font-semibold">
            Make day one make sense.
          </h3>
          <p className="mt-3 text-text-soft text-[14px] leading-[1.8]">
            Give new teammates the reasoning behind the system, not just a map of what’s
            there.
          </p>
          <span
            className={cn(
              'block mt-7 text-[#848b78] text-[9px] leading-[1.6] font-mono',
              'tracking-[0.7px]',
            )}
          >
            FASTER TIME TO CONTEXT
          </span>
        </article>
        <article className="p-7 border border-line-soft rounded-lg max-[900px]:p-5.5">
          <div
            className={cn(
              'w-10 h-10 grid place-items-center bg-surface-warm text-[#a7792a] border',
              'border-[#eee8db] rounded-lg',
            )}
          >
            <GitBranch className="w-[19px]" />
          </div>
          <h3 className="mt-6 text-[18px] tracking-[-0.5px] font-semibold">
            Let knowledge outlast tenure.
          </h3>
          <p className="mt-3 text-text-soft text-[14px] leading-[1.8]">
            People move on. Their thinking shouldn’t disappear from the work they helped
            shape.
          </p>
          <span
            className={cn(
              'block mt-7 text-[#848b78] text-[9px] leading-[1.6] font-mono',
              'tracking-[0.7px]',
            )}
          >
            A MEMORY THAT STAYS
          </span>
        </article>
      </div>
      <div
        className={cn(
          'flex justify-center items-center gap-2.5 mt-8 text-[12px] text-[#7e8671]',
          'max-[640px]:items-start max-[640px]:leading-[1.7]',
        )}
      >
        <Check className="max-[640px]:mt-[3px]" size={18} />
        <p>
          Better decisions start with shared context.{' '}
          <strong className="text-[#535e44] font-normal">
            Give everyone the same starting point.
          </strong>
        </p>
      </div>
    </section>
  )
}
