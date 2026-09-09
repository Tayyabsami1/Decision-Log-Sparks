import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import { Brand } from '@/components/Brand'

export function SiteFooter() {
  return (
    <footer
      className={cn(
        'max-w-290 px-8 mx-auto max-[640px]:px-5.5 flex items-center gap-6 flex-wrap',
        'py-8.5 max-[640px]:gap-5',
      )}
    >
      <Brand />
      <p className="text-[11px] text-[#818777] max-[640px]:basis-full max-[640px]:order-1">
        Every decision has a reason. Keep it.
      </p>
      <a className="ml-auto flex items-center gap-1.5 text-[11px]" href="#main-content">
        Back to top
        <ArrowUpRight size={14} />
      </a>
      <span className="basis-full text-[9px] text-[#929887] max-[640px]:order-2">
        © {new Date().getFullYear()} Decision Log
      </span>
    </footer>
  )
}
