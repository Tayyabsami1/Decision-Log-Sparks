import { ArrowUpRight } from 'lucide-react'
import { Brand } from '@/components/Brand'

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-4 px-6 py-8 sm:px-8">
      <Brand />
      <p className="order-1 basis-full text-xs text-text-soft sm:order-none sm:basis-auto">
        Every decision has a reason. Keep it.
      </p>
      <a
        className="ml-auto flex min-h-11 items-center gap-2 text-xs hover:text-accent-foreground"
        href="#main-content"
      >
        Back to top
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </a>
      <span className="order-2 basis-full text-xs text-text-soft">
        © {new Date().getFullYear()} Decision Log
      </span>
    </footer>
  )
}
