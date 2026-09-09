import { cn } from '@/lib/utils'
import { DemoLink } from '@/components/Brand'
import { SectionLabel } from './SectionLabel'

export function ProductOverview() {
  return (
    <section
      className="max-w-290 px-8 mx-auto max-[640px]:px-5.5 py-25 max-[640px]:py-15"
      id="product"
    >
      <div className="mb-11.5 max-[640px]:mb-8">
        <SectionLabel number="02">A HOME FOR THE WHY</SectionLabel>
        <h2
          className={cn(
            'text-[clamp(30px,_3.5vw,_44px)] leading-[1.16] font-semibold',
            'tracking-[-1.7px] text-balance mt-4.5',
          )}
        >
          Not just what happened.
          <br />
          <span className="text-[#838a78]">Everything that made it make sense.</span>
        </h2>
        <p className="max-w-142.5 mt-5.5 text-[15px] leading-[1.85] text-text-soft">
          One living record. The context, the alternatives, the trade-offs.
          <br className="max-[640px]:hidden" /> Together, exactly where the next person
          needs them.
        </p>
      </div>
      <div
        className={cn(
          'grid grid-cols-3 gap-9 max-[900px]:gap-5 max-[640px]:grid-cols-1',
          'max-[640px]:gap-7',
        )}
      >
        <div className="border-t border-t-line-soft pt-6">
          <span className="text-[12px] leading-normal font-mono text-[#aa7b2d]">01</span>
          <h3 className="mt-6 text-[18px] tracking-[-0.5px] font-semibold max-[640px]:mt-3.5">
            The full picture.
          </h3>
          <p className="mt-3 text-text-soft text-[14px] leading-[1.8]">
            What changed. Who owned it. Which assumptions were true at the time.
          </p>
        </div>
        <div className="border-t border-t-line-soft pt-6">
          <span className="text-[12px] leading-normal font-mono text-[#aa7b2d]">02</span>
          <h3 className="mt-6 text-[18px] tracking-[-0.5px] font-semibold max-[640px]:mt-3.5">
            The roads not taken.
          </h3>
          <p className="mt-3 text-text-soft text-[14px] leading-[1.8]">
            See the alternatives and trade-offs, so you don’t have to retrace every step.
          </p>
        </div>
        <div className="border-t border-t-line-soft pt-6">
          <span className="text-[12px] leading-normal font-mono text-[#aa7b2d]">03</span>
          <h3 className="mt-6 text-[18px] tracking-[-0.5px] font-semibold max-[640px]:mt-3.5">
            Context that keeps up.
          </h3>
          <p className="mt-3 text-text-soft text-[14px] leading-[1.8]">
            Know what’s active, what’s been superseded, and what’s worth revisiting.
          </p>
        </div>
        <DemoLink className="hover:-translate-y-0.5 col-span-full justify-self-start mt-0.5">
          Explore a decision
        </DemoLink>
      </div>
    </section>
  )
}
