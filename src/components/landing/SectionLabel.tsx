import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionLabelProps {
  className?: string
  number: string
  children: ReactNode
}

export function SectionLabel({ number, children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-[#777b6c] text-[10px] leading-[1.7] font-mono',
        'tracking-[1.3px]',
        className,
      )}
    >
      <span className="pr-3 border-r border-r-[#cdd1c2] text-[#a47726]">{number}</span>
      {children}
    </div>
  )
}
