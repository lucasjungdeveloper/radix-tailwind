import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <Outlet />
    </div>
  )
}
