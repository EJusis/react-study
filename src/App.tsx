import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { tasks } from './tasks/registry'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* Every task in the registry gets its own route, e.g. /to-do or /routing/* */}
        {tasks.map(({ slug, component: TaskComponent }) => (
          <Route
            key={slug}
            path={`${slug}/*`}
            element={
              <Suspense fallback={<p className="text-slate-500">Loading…</p>}>
                <TaskComponent />
              </Suspense>
            }
          />
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
