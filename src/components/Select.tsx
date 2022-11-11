import * as SelectPrimitive from '@radix-ui/react-select'

import { RiArrowDownSLine, RiArrowUpSLine, RiCheckLine } from 'react-icons/ri'

type SelectSeparatorProps = Omit<
  SelectPrimitive.SelectSeparatorProps,
  'className'
>

export const SelectSeparator = ({ ...props }: SelectSeparatorProps) => {
  return (
    <SelectPrimitive.Separator
      {...props}
      className="mb-1 h-[1px] bg-neutral-500"
    />
  )
}

interface SelectGroupProps
  extends Omit<SelectPrimitive.SelectGroupProps, 'className'> {
  label: string
}

export const SelectGroup = ({
  children,
  label,
  ...props
}: SelectGroupProps) => {
  return (
    <SelectPrimitive.Group {...props}>
      <SelectPrimitive.Label className="bg-neutral-800 px-1 text-sm">
        {label}
      </SelectPrimitive.Label>
      <div className="p-1">{children}</div>
    </SelectPrimitive.Group>
  )
}

type SelectItemProps = Omit<SelectPrimitive.SelectItemProps, 'className'>

export const SelectItem = ({ children, ...props }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      {...props}
      className="flex cursor-pointer items-center gap-1 rounded-lg px-3 py-1 text-lg  hover:bg-purple-600"
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <RiCheckLine />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

interface SelectProps extends SelectPrimitive.SelectProps {
  placeholder: string
}

export const Select = ({ children, placeholder, ...props }: SelectProps) => (
  <SelectPrimitive.Root {...props}>
    <SelectPrimitive.Trigger className="inline-flex items-center gap-1 rounded-lg bg-purple-600 px-3 py-1 text-lg hover:bg-purple-700">
      <SelectPrimitive.Value placeholder={placeholder || 'Not found'} />
      <SelectPrimitive.Icon>
        <RiArrowDownSLine />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="overflow-hidden rounded-lg bg-neutral-700">
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center bg-neutral-800">
          <RiArrowUpSLine />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center bg-neutral-800">
          <RiArrowDownSLine />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
)
