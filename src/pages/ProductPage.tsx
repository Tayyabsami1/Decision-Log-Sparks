import { cn } from '@/lib/utils'
import { ArrowDown, Check } from 'lucide-react'
import { DemoLink } from '@/components/Brand'
import { LandingSections } from '@/components/LandingSections'

export default function ProductPage() {
  return (
    <div>
      <a
        className={cn(
          'fixed top-3 left-3 z-60 py-3 px-4 rounded-md bg-background text-foreground',
          '-translate-y-[200%] focus:translate-y-0',
        )}
        href="#main-content"
      >
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1}>
        <section
          className={cn(
            'max-w-290 px-8 mx-auto max-[640px]:px-5.5 text-center',
            'pt-[clamp(76px,_10vw,_140px)] pb-19',
            'bg-[radial-gradient(ellipse_at_50%_20%,_#fff8e7_0,_transparent_65%)]',
            'max-[640px]:pt-16 max-[640px]:pb-10.5',
          )}
        >
          <div
            className={cn(
              'flex items-center justify-center gap-[9px] text-[11px] leading-[1.6]',
              'font-mono tracking-[1.6px] text-[#69645a] max-[640px]:text-[8px]',
              'max-[640px]:tracking-[1px]',
            )}
          >
            <span className="text-[#b87808] text-[22px] leading-[1]">✳</span> THE MEMORY
            BEHIND YOUR MOMENTUM
          </div>
          <h1
            className={cn(
              'text-[clamp(56px,_7.5vw,_96px)] leading-[1.06] tracking-[-5px] font-semibold',
              'my-5.5 mx-0 text-[#222420] max-[640px]:text-[clamp(38px,_12vw,_70px)]',
              'max-[640px]:tracking-[-3px]',
            )}
          >
            Keep the why.
            <br />
            <span className="text-[#858b7a]">Move forward.</span>
          </h1>
          <p
            className={cn(
              'max-w-180 mt-6 mx-auto mb-0 text-[17px] leading-[1.75] text-[#6a6b65]',
              'max-[640px]:text-[15px]',
            )}
          >
            The decision made sense. Make sure it still does six months later.
            <br className="max-[640px]:hidden" /> Keep the reasoning, trade-offs, and
            context in one place your whole team can find.
          </p>
          <div className="flex items-center justify-center gap-[25px] mt-7 max-[640px]:gap-4.5 max-[380px]:flex-col max-[380px]:gap-2">
            <DemoLink className="hover:-translate-y-0.5 h-12 px-6" />
            <a
              className={cn(
                'inline-flex items-center gap-2.5 text-[14px] font-semibold py-3',
                'hover:text-[#9b6506] max-[640px]:text-[12px]',
              )}
              href="#how-it-works"
            >
              See how it works <ArrowDown size={16} />
            </a>
          </div>
          <div
            className={cn(
              'flex justify-center gap-5 text-[12px] text-[#7d7f75] mt-4',
              'max-[640px]:text-[10px] max-[640px]:gap-3 max-[640px]:flex-wrap',
            )}
          >
            <span className="flex gap-[5px] items-center">
              <Check size={14} /> No sign-up required
            </span>
            <span className="flex gap-[5px] items-center">
              <Check size={14} /> Real decisions. Real context.
            </span>
          </div>
        </section>
        <LandingSections />
      </main>
    </div>
  )
}
