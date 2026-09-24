import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="py-16 text-center">
      <p className="font-mono text-sm text-slate-400">404</p>
      <h1 className="mt-2 text-2xl font-bold">Page not found</h1>
      <Link to="/" className="mt-4 inline-block text-sky-600 hover:underline">
        Back to all tasks
      </Link>
    </div>
  )
}
