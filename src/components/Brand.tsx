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
        'inline-flex items-center gap-2 text-xl font-semibold tracking-tight',
        'whitespace-nowrap text-foreground sm:text-2xl',
      )}
      aria-label="Decision Log home"
    >
      <span className="flex h-7 -rotate-12 items-center gap-1" aria-hidden="true">
        <i className="h-6 w-1 rounded-xs bg-primary" />
        <i className="h-8 w-1 rounded-xs bg-primary" />
        <i className="h-5 w-1 rounded-xs bg-primary" />
      </span>
      <span>
        decision<span className="font-normal">log</span>
        <span className="text-accent-foreground">.</span>
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
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </Link>
  )
}
