import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { DemoLink } from '@/components/Brand'

export function PricingSection() {
  return (
    <section
      className={cn(
        'max-w-290 px-8 mx-auto max-[640px]:px-5.5 grid grid-cols-2 gap-25',
        'items-center pt-7.5 pb-25 max-[900px]:gap-10 max-[640px]:grid-cols-1',
        'max-[640px]:pt-0 max-[640px]:pb-15 max-[640px]:gap-7.5',
      )}
      id="pricing"
    >
      <div>
        <div
          className={cn(
            'flex items-center gap-3 text-[#777b6c] text-[10px] leading-[1.7] font-mono',
            'tracking-[1.3px]',
          )}
        >
          START WITH A LITTLE CONTEXT
        </div>
        <h2
          className={cn(
            'text-[clamp(30px,_3.5vw,_44px)] leading-[1.16] font-semibold',
            'tracking-[-1.7px] text-balance mt-4.5',
          )}
        >
          Try the idea.
          <br />
          Feel the difference.
        </h2>
        <p className="max-w-142.5 mt-5.5 text-[15px] leading-[1.85] text-text-soft">
          Explore a complete sample workspace, then add a decision of your own. No account
          or credit card needed.
        </p>
      </div>
      <div className="p-7.5 border border-[#dfdfd3] rounded-[10px] bg-surface-warm max-[640px]:p-6">
        <div>
          <span className="block text-[13px] text-[#757865]">Interactive demo</span>
          <strong className="block text-[35px] tracking-[-1px] font-semibold mt-2.5">
            Free
            <span className="text-[13px] font-normal tracking-[0] text-[#838675]">
              {' '}
              to explore
            </span>
          </strong>
        </div>
        <ul className="grid gap-3.5 my-6.5 mx-0">
          <li className="flex items-center gap-[9px] text-[12px] text-[#606b50]">
            <Check className="w-3.5 h-3.5" />
            Realistic decisions and their full context
          </li>
          <li className="flex items-center gap-[9px] text-[12px] text-[#606b50]">
            <Check className="w-3.5 h-3.5" />
            Create decisions and update their status
          </li>
          <li className="flex items-center gap-[9px] text-[12px] text-[#606b50]">
            <Check className="w-3.5 h-3.5" />
            Illustrative answers with linked sources
          </li>
        </ul>
        <DemoLink className="hover:-translate-y-0.5" />
        <p className="text-[10px] leading-[1.7] mt-4 text-[#818573]">
          Demo changes reset on refresh. Paid plans aren’t available yet.
        </p>
      </div>
    </section>
  )
}
