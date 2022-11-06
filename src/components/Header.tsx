import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="mt-4 mb-12 flex items-center gap-12">
      <Link to="/">
        <h1 className="text-3xl font-bold hover:text-neutral-300">
          Radix + Tailwind
        </h1>
      </Link>
    </header>
  )
}
