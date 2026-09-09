import { FileText } from 'lucide-react'
import { DemoLink } from '@/components/Brand'
import { cn } from '@/lib/utils'
import { SectionLabel } from './SectionLabel'

export function MemorySection() {
  return (
    <section className="bg-foreground py-14 text-background sm:py-20" id="memory">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionLabel
          className="mb-6 text-background/70"
          numberClassName="border-background/20 text-primary"
          number="03"
        >
          ANSWERS WITH A PAPER TRAIL
        </SectionLabel>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-24">
          <h2
            className={cn(
              'text-3xl leading-tight font-semibold tracking-tight text-balance',
              'md:text-4xl lg:text-5xl',
            )}
          >
            Ask a question.
            <br />
            <span className="text-background/75">
              Get your team’s
              <br />
              actual reasoning.
            </span>
          </h2>
          <div>
            <p className="max-w-xl text-base leading-relaxed text-background/75">
              Skip the archaeology. Find the decision behind the answer, with the people,
              dates, and context that make it trustworthy.
            </p>
            <div className="mt-6 flex items-start gap-3 border-t border-background/20 pt-6 text-sm leading-relaxed text-background/75">
              <FileText className="mt-1 size-5 text-primary" aria-hidden="true" />
              <span>
                Every answer has a source.
                <br />
                <strong className="font-normal text-background">
                  Every source has a story.
                </strong>
              </span>
            </div>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-background/70">
              Explore illustrative answers and their source decisions in the demo.
            </p>
            <DemoLink className="mt-6 hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </section>
  )
}
