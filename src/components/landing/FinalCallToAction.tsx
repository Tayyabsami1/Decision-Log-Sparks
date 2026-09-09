import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { DemoLink } from '@/components/Brand'

export function FinalCallToAction() {
  return (
    <section
      className={cn(
        'text-center py-18 bg-[#f5f3e9] border-t border-t-[#e8e5d7]',
        'max-[640px]:py-[55px]',
      )}
    >
      <div className="max-w-290 px-8 mx-auto max-[640px]:px-5.5">
        <span className="text-[38px] text-[#af7a20]" aria-hidden="true">
          ✳
        </span>
        <h2
          className={cn(
            'font-semibold tracking-[-1.7px] text-balance mt-5',
            'text-[clamp(30px,_4.4vw,_54px)] leading-[1.16]',
          )}
        >
          Your team is already
          <br />
          making decisions.
          <br />
          <span className="text-[#838a78]">Start remembering them.</span>
        </h2>
        <p className="mt-5.5 mx-0 mb-7 text-[14px] text-[#7e816f]">
          The next person to ask “why” will thank you.
        </p>
        <DemoLink className="hover:-translate-y-0.5" />
        <div className="flex items-center justify-center gap-1.5 mt-4.5 text-[10px] text-[#868b79]">
          <Check size={13} />
          No sign-up. Just a little clarity.
        </div>
      </div>
    </section>
  )
}
