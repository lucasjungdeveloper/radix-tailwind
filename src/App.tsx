import './styles/global.css'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ToastProvider } from './contexts/ToastContext'

const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
