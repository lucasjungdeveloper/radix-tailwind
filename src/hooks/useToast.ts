import { ToastContext } from '../contexts/ToastContext'
import { useContext } from 'react'

export const useToast = () => useContext(ToastContext)
