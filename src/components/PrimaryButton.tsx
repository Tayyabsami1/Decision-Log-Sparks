import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const primaryButtonClasses = cn(
  'h-11 gap-3 rounded-[7px] px-5 text-sm font-semibold',
  'shadow-[0_1px_2px_#6c450519,inset_0_1px_0_#ffffff35]',
  'hover:-translate-y-0.5 max-[640px]:px-4',
)

export function PrimaryButton({ className, ...props }: ComponentProps<typeof Button>) {
  return <Button {...props} className={cn(primaryButtonClasses, className)} />
}
