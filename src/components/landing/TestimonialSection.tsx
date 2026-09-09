import { cn } from '@/lib/utils'
import { Layers } from 'lucide-react'

export function TestimonialSection() {
  return (
    <section
      className={cn(
        'max-w-290 px-8 mx-auto max-[640px]:px-5.5 flex items-center gap-7.5 py-11',
        'border-y border-y-line-soft max-[640px]:gap-4 max-[640px]:py-7.5',
      )}
    >
      <div
        className={cn(
          'text-[100px] leading-[0.7] font-serif text-[#d6bb7f] self-start',
          'max-[640px]:text-[65px]',
        )}
        aria-hidden="true"
      >
        “
      </div>
      <div>
        <p
          className={cn(
            'text-[8px] leading-[1.8] font-mono tracking-[1px] text-[#808873]',
            'max-[640px]:text-[7px]',
          )}
        >
          THE DIFFERENCE CONTEXT MAKES · ILLUSTRATIVE TESTIMONIAL
        </p>
        <blockquote
          className={cn(
            'text-[26px] leading-[1.5] font-serif tracking-[-0.5px] mt-4 mx-0 mb-5.5',
            'text-[#46523b] max-[640px]:text-[23px]',
          )}
        >
          “We stopped asking ‘why did we do this?’
          <br className="max-[640px]:hidden" /> and started finding the answer.”
        </blockquote>
        <div className="flex items-center gap-2.5 text-[11px]">
          <span
            className={cn(
              'inline-grid place-items-center w-6 h-6 rounded-full bg-[#ebe4d5]',
              'text-[#8b7454] text-[9px] shrink-0',
            )}
          >
            MC
          </span>
          <span>
            <strong className="block">Maya Chen</strong>
            <small className="block mt-1 text-[10px] text-[#818876]">
              Engineering lead, Acme · Fictional team example
            </small>
          </span>
        </div>
      </div>
      <div
        className={cn(
          'ml-auto flex gap-2 items-center text-[#78826c] text-[26px] tracking-[-1px]',
          'max-[900px]:hidden',
        )}
      >
        <Layers size={28} />
        <span>acme</span>
      </div>
    </section>
  )
}
