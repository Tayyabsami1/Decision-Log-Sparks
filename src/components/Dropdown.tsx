import { useId } from 'react'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface DropdownOption {
  label: string
  value: string
  disabled?: boolean
}

interface DropdownProps {
  label: string
  placeholder: string
  options: readonly DropdownOption[]
  id?: string
  name?: string
  value?: string | null
  defaultValue?: string | null
  onValueChange?: (value: string | null) => void
  required?: boolean
  disabled?: boolean
  className?: string
}

export function Dropdown({
  label,
  placeholder,
  options,
  id,
  className,
  ...selectProps
}: DropdownProps) {
  const generatedId = useId()
  const triggerId = id ?? generatedId

  return (
    <div className={cn('grid min-w-0 gap-[7px]', className)}>
      <label className="text-[12px] font-semibold text-[#677456]" htmlFor={triggerId}>
        {label}
      </label>
      <Select<string> items={options} {...selectProps}>
        <SelectTrigger
          id={triggerId}
          className={cn(
            'w-full min-w-0 min-h-10 rounded-md bg-card px-3 text-[13px]',
            'max-[640px]:min-h-11 max-[640px]:text-[16px]',
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false} className="p-1">
          {options.map(({ label: optionLabel, value, disabled }) => (
            <SelectItem
              key={value}
              value={value}
              disabled={disabled}
              className="min-h-10 px-3 pr-8 max-[640px]:min-h-11"
            >
              {optionLabel}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
