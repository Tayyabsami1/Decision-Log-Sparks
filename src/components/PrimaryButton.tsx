import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const primaryButtonClasses = cn(
  'h-11 gap-3 rounded-lg px-4 text-sm font-semibold shadow-xs',
  'hover:-translate-y-0.5 sm:px-5',
)

export function PrimaryButton({ className, ...props }: ComponentProps<typeof Button>) {
  return <Button {...props} className={cn(primaryButtonClasses, className)} />
}
