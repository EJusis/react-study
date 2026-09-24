import { useEffect, useState, type FormEvent } from 'react'

interface Todo {
  id: string
  text: string
  done: boolean
}

type Filter = 'all' | 'active' | 'done'

const STORAGE_KEY = 'react-study:todos'

function loadTodos(): Todo[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? (JSON.parse(saved) as Todo[]) : []
  } catch {
    return []
  }
}

export default function TodoTask() {
  // Lazy initializer: read localStorage only on first render
  const [todos, setTodos] = useState<Todo[]>(loadTodos)
  const [text, setText] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(e: FormEvent) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), text: trimmed, done: false }])
    setText('')
  }

  function toggleTodo(id: string) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.done))
  }

  // Derived state — computed during render, not stored in state
  const visibleTodos = todos.filter((t) =>
    filter === 'active' ? !t.done : filter === 'done' ? t.done : true,
  )
  const remaining = todos.filter((t) => !t.done).length

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-6 text-2xl font-bold">To-Do List</h1>

      <form onSubmit={addTodo} className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <button className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700">
          Add
        </button>
      </form>

      <div className="mt-4 flex gap-1">
        {(['all', 'active', 'done'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-md px-3 py-1 text-sm capitalize ${
              filter === f ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        {visibleTodos.length === 0 && (
          <li className="px-4 py-6 text-center text-sm text-slate-400">Nothing here yet.</li>
        )}
        {visibleTodos.map((todo) => (
          <li key={todo.id} className="group flex items-center gap-3 px-4 py-3">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              className="size-4 accent-sky-600"
            />
            <span className={`flex-1 ${todo.done ? 'text-slate-400 line-through' : ''}`}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              aria-label={`Delete ${todo.text}`}
              className="text-slate-400 opacity-0 hover:text-rose-600 group-hover:opacity-100"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex justify-between text-sm text-slate-500">
        <span>{remaining} left</span>
        <button onClick={clearCompleted} className="hover:text-slate-900">
          Clear completed
        </button>
      </div>
    </div>
  )
}
