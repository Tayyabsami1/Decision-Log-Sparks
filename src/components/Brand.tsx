import { cn } from '@/lib/utils'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { primaryButtonClasses } from '@/components/PrimaryButton'

export function Brand() {
  return (
    <Link
      to="/"
      className={cn(
        'inline-flex items-center gap-2.5 text-[24px] tracking-[-1.2px] font-semibold',
        'whitespace-nowrap text-foreground max-[640px]:text-[21px]',
      )}
      aria-label="Decision Log home"
    >
      <span className="flex items-center gap-[3px] -rotate-12 h-6.5" aria-hidden="true">
        <i className="w-[5px] h-[23px] bg-primary rounded-xs" />
        <i className="w-[5px] bg-primary rounded-xs h-7.5" />
        <i className="w-[5px] bg-primary rounded-xs h-4.5" />
      </span>
      <span>
        decision<span className="font-normal">log</span>
        <span className="text-[#b27407]">.</span>
      </span>
    </Link>
  )
}

export function DemoLink({
  children = 'Try Demo',
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Link to="/demo" className={cn(buttonVariants(), primaryButtonClasses, className)}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  )
}
