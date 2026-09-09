import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  className?: string
  numberClassName?: string
  number: string
  children: ReactNode
}

export function SectionLabel({
  number,
  children,
  className,
  numberClassName,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 font-mono text-xs leading-relaxed tracking-widest text-text-soft',
        className,
      )}
    >
      <span
        className={cn(
          'shrink-0 border-r border-border pr-3 text-accent-foreground',
          numberClassName,
        )}
      >
        {number}
      </span>
      {children}
    </div>
  )
}
