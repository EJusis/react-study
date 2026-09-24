import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight">
            React <span className="text-sky-600">Study</span>
          </Link>
          {!isHome && (
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-sky-600">
              ← All tasks
            </Link>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
