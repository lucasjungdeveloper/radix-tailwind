import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/Home'
import { SelectPage } from './pages/Select'
import { ToastPage } from './pages/Toast'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/toast" element={<ToastPage />} />
        <Route path="/select" element={<SelectPage />} />
      </Route>
    </Routes>
  )
}
