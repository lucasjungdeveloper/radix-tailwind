import * as ToastPrimitive from '@radix-ui/react-toast'
import { RiCloseLine } from 'react-icons/ri'

export const RadixToastProvider = ToastPrimitive.Provider
export const RadixToastViewport = ToastPrimitive.Viewport

export interface Toast {
  id?: string
  title?: string
  description?: string
  duration?: number
  type?: 'foreground' | 'background'
  status?: 'success' | 'error' | 'warning' | 'info'
}

interface ToastProps extends ToastPrimitive.ToastProps {
  description?: string
  status?: 'success' | 'error' | 'warning' | 'info'
}

export const RadixToast = ({
  description,
  title,
  status = 'error',
  duration = 3000,
  ...props
}: ToastProps) => {
  enum StatusColors {
    success = 'bg-green-500 hover:bg-green-600',
    error = 'bg-red-500 hover:bg-red-600',
    warning = 'bg-orange-500 hover:bg-orange-600',
    info = 'bg-blue-500 hover:bg-blue-600',
  }

  return (
    <ToastPrimitive.Root
      duration={duration}
      {...props}
      className={`relative mr-2 mt-2 flex w-80 min-w-fit max-w-[100vw] flex-col rounded-lg p-4 shadow-sm  shadow-black/25 translate-x-radix-toast-swipe-move-x radix-state-closed:animate-hide radix-state-open:animate-slideIn ${StatusColors[status]}`}
    >
      <ToastPrimitive.Close
        asChild
        className="absolute top-1 right-1 rounded-lg text-2xl text-neutral-50 drop-shadow-sharp/25 hover:text-neutral-200 hover:drop-shadow-sharp/75"
      >
        <RiCloseLine className="cursor-pointer" />
      </ToastPrimitive.Close>
      <ToastPrimitive.Title className="text-2xl font-bold text-white">
        {title}
      </ToastPrimitive.Title>
      <ToastPrimitive.Description className="text-xl text-neutral-200">
        {description}
      </ToastPrimitive.Description>
    </ToastPrimitive.Root>
  )
}
