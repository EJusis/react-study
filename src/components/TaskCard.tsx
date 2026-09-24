import { Link } from 'react-router-dom'
import type { Difficulty, Task } from '../tasks/registry'

const difficultyStyles: Record<Difficulty, string> = {
  Easy: 'bg-emerald-100 text-emerald-700',
  Medium: 'bg-amber-100 text-amber-700',
  Hard: 'bg-rose-100 text-rose-700',
}

interface TaskCardProps {
  task: Task
  index: number
}

export default function TaskCard({ task, index }: TaskCardProps) {
  return (
    <Link
      to={`/${task.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs text-slate-400">#{String(index + 1).padStart(2, '0')}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${difficultyStyles[task.difficulty]}`}>
          {task.difficulty}
        </span>
      </div>

      <h2 className="text-lg font-semibold group-hover:text-sky-600">{task.title}</h2>
      <p className="mt-1 flex-1 text-sm text-slate-600">{task.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {task.concepts.map((concept) => (
          <li key={concept} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
            {concept}
          </li>
        ))}
      </ul>

      <span className="mt-4 font-mono text-xs text-slate-400">/{task.slug}</span>
    </Link>
  )
}
