import { useId } from 'react'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface DropdownOption<TValue extends string = string> {
  label: string
  value: TValue
  disabled?: boolean
}

interface DropdownProps<TValue extends string> {
  label: string
  placeholder: string
  options: readonly DropdownOption<TValue>[]
  id?: string
  name?: string
  value?: TValue | null
  defaultValue?: TValue | null
  onValueChange?: (value: TValue | null) => void
  required?: boolean
  disabled?: boolean
  className?: string
  hideLabel?: boolean
  labelClassName?: string
  triggerClassName?: string
}

export function Dropdown<TValue extends string>({
  label,
  placeholder,
  options,
  id,
  className,
  hideLabel = false,
  labelClassName,
  triggerClassName,
  ...selectProps
}: DropdownProps<TValue>) {
  const generatedId = useId()
  const triggerId = id ?? generatedId

  return (
    <div className={cn('grid min-w-0 gap-[7px]', className)}>
      <label
        className={cn(
          'text-[12px] font-semibold text-[#677456]',
          labelClassName,
          hideLabel && 'sr-only',
        )}
        htmlFor={triggerId}
      >
        {label}
      </label>
      <Select<TValue> items={options} {...selectProps}>
        <SelectTrigger
          id={triggerId}
          className={cn(
            'w-full min-w-0 min-h-10 rounded-md bg-card px-3 text-[13px]',
            'max-[640px]:min-h-11 max-[640px]:text-[16px]',
            triggerClassName,
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
