import TaskCard from '../components/TaskCard'
import { tasks } from '../tasks/registry'

export default function HomePage() {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">React Study</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Small projects built to practise React fundamentals — each card opens a working demo.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task, index) => (
          <TaskCard key={task.slug} task={task} index={index} />
        ))}
      </div>
    </>
  )
}
