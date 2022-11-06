import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <Outlet />
    </div>
  )
}
