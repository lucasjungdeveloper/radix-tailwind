import {
  RadixToast,
  RadixToastProvider,
  RadixToastViewport,
} from '../components/Toast'
import { createContext, useState } from 'react'

import type { ReactNode } from 'react'
import type { Toast } from '../components/Toast'

type ToastContextProps = (toast: Toast) => void

export const ToastContext = createContext({} as ToastContextProps)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Toast) => {
    if (!toast.id) {
      toast.id = Math.random().toString(36).slice(2) // Example: "7qcy1m4uiur"
      setToasts((currentToasts) => [...currentToasts, toast])
    } else {
      const toastExists = toasts.some((t) => t.id === toast.id)
      if (!toastExists) {
        setToasts((currentToasts) => [...currentToasts, toast])
      }
    }
  }

  return (
    <ToastContext.Provider value={addToast}>
      <RadixToastProvider>
        <RadixToastViewport className="fixed top-0 right-0 z-[2147483647] flex w-fit flex-col gap-2 focus:outline-none focus:ring-0" />
        {toasts.map((toast) => {
          return (
            <RadixToast
              key={toast.id}
              onOpenChange={(open) => {
                if (!open) {
                  setTimeout(() => {
                    setToasts((currentToasts) =>
                      currentToasts.filter((t) => t.id !== toast.id)
                    )
                  }, 100) // Wait for the hide animation to finish
                }
              }}
              onSwipeEnd={() => {
                setToasts((currentToasts) =>
                  currentToasts.filter((t) => t.id !== toast.id)
                ) // Avoid hide animation when closing the toast by swiping
              }}
              {...toast}
            />
          )
        })}
        {children}
      </RadixToastProvider>
    </ToastContext.Provider>
  )
}
