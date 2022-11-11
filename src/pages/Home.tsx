import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <main className="flex flex-1 gap-4">
      <Link to="/toast">
        <section className="rounded-lg bg-neutral-800 p-4 text-lg hover:bg-black/25">
          Toast
        </section>
      </Link>
      <Link to="/select">
        <section className="rounded-lg bg-neutral-800 p-4 text-lg hover:bg-black/25">
          Select
        </section>
      </Link>
    </main>
  )
}
