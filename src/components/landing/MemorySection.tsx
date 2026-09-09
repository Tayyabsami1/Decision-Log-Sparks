import { cn } from '@/lib/utils'
import { FileText } from 'lucide-react'
import { DemoLink } from '@/components/Brand'
import { SectionLabel } from './SectionLabel'

export function MemorySection() {
  return (
    <section className="bg-[#252b22] text-[#f4f5ed] py-19 max-[640px]:py-14" id="memory">
      <div className="max-w-290 px-8 mx-auto max-[640px]:px-5.5">
        <div
          className={cn(
            'grid grid-cols-[1.2fr_1fr] gap-x-25 items-start max-[900px]:gap-x-10',
            'max-[640px]:block',
          )}
        >
          <SectionLabel className="col-span-full text-[#b6bca9] mb-5.5" number="03">
            ANSWERS WITH A PAPER TRAIL
          </SectionLabel>
          <h2
            className={cn(
              'text-[clamp(30px,_3.5vw,_44px)] leading-[1.16] font-semibold',
              'tracking-[-1.7px] text-balance row-[2/6]',
            )}
          >
            Ask a question.
            <br />
            <span className="text-[#b3bfa0]">
              Get your team’s
              <br />
              actual reasoning.
            </span>
          </h2>
          <p className="max-w-142.5 text-[15px] leading-[1.85] text-[#c0c7b6] mt-0 max-[640px]:mt-6">
            Skip the archaeology. Find the decision behind the answer, with the people,
            dates, and context that make it trustworthy.
          </p>
          <div
            className={cn(
              'flex items-start gap-3 pt-5.5 mt-6 border-t border-t-[#48513e]',
              'text-[#c0c7b6] text-[13px] leading-[1.8]',
            )}
          >
            <FileText className="text-primary mt-1" size={18} />
            <span>
              Every answer has a source.
              <br />
              <strong className="text-[#f0f3e9] font-normal">
                Every source has a story.
              </strong>
            </span>
          </div>
          <p className="max-w-142.5 text-[11px] mt-5.5 text-[#a9b29c] max-[640px]:mt-6">
            Explore illustrative answers and their source decisions in the demo.
          </p>
          <DemoLink className="hover:-translate-y-0.5 justify-self-start mt-5.5" />
        </div>
      </div>
    </section>
  )
}
