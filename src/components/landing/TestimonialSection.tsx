import { Layers } from 'lucide-react'

export function TestimonialSection() {
  return (
    <section className="mx-auto flex max-w-6xl items-center gap-4 border-y border-line-soft px-6 py-8 sm:gap-8 sm:px-8 sm:py-12">
      <span
        className="hidden self-start font-serif text-8xl leading-none text-primary/50 sm:block"
        aria-hidden="true"
      >
        “
      </span>
      <div className="min-w-0">
        <p className="font-mono text-xs leading-relaxed tracking-wide text-text-soft">
          THE DIFFERENCE CONTEXT MAKES · ILLUSTRATIVE TESTIMONIAL
        </p>
        <blockquote className="mt-4 mb-6 font-serif text-2xl leading-relaxed tracking-tight text-foreground sm:text-3xl">
          “We stopped asking ‘why did we do this?’
          <br className="hidden sm:block" /> and started finding the answer.”
        </blockquote>
        <div className="flex items-center gap-3 text-xs">
          <span
            className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"
            aria-hidden="true"
          >
            MC
          </span>
          <span>
            <strong className="block">Maya Chen</strong>
            <small className="mt-1 block text-xs leading-relaxed text-text-soft">
              Engineering lead, Acme · Fictional team example
            </small>
          </span>
        </div>
      </div>
      <div className="ml-auto hidden shrink-0 items-center gap-2 text-2xl tracking-tight text-text-soft lg:flex">
        <Layers className="size-7" aria-hidden="true" />
        <span>acme</span>
      </div>
    </section>
  )
}
