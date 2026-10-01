// To-Do List — build it yourself!
//
// This component is already wired up: it's lazy-loaded from src/tasks/registry.ts
// and rendered at /to-do. Keep the default export and build everything inside it.
//
// Requirements:
//   [ ] 1. Type an item into an input and add it to the list (submit with Enter or an "Add" button)
//   [ ] 2. Ignore empty / whitespace-only input
//   [ ] 3. Mark an item as done / not done with a checkbox
//   [ ] 4. Delete an item
//   [ ] 5. Filter the list: all / active / done
//   [ ] 6. Show how many items are left
//   [ ] 7. "Clear completed" button removes all done items
//   [ ] 8. Items survive a page refresh (localStorage)
//
// Hints (open only when you get stuck):
//   - Each todo needs a stable unique id for its `key` → crypto.randomUUID()
//   - Never mutate state directly; create new arrays with map / filter / spread
//   - The visible list and "items left" can be calculated during render; they don't need their own state
//   - useState accepts a function to compute the initial value once (handy for reading localStorage)
//   - useEffect can save to localStorage whenever the todos change
//
// A reference solution is saved in /solutions/todo/TodoTask.tsx. Try not to peek until you're done!

import { useState } from "react";

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

type Filter = "all" | "active" | "done";

const initialTasks: Todo[] = [
  { id: crypto.randomUUID(), text: "Buy groceries", done: false },
  { id: crypto.randomUUID(), text: "Walk the dog", done: false },
  { id: crypto.randomUUID(), text: "Read a book", done: false },
];

export default function TodoTask() {
  const [tasks, setTasks] = useState<Todo[]>(initialTasks);
  const [newText, setNewText] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = (e: React.SubmitEvent) => {
    e.preventDefault();
    const trimmedText = newText.trim();
    if (!newText) return;
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: trimmedText, done: false },
    ]);
    setNewText("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.done));
  };

  const visibleTodos = tasks.filter((t) =>
    filter === "active" ? !t.done : filter === "done" ? t.done : true,
  );

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-6 text-2xl font-bold">To-Do List</h1>
      <form
        onSubmit={addTodo}
        className="flex gap-2"
      >
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <button className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700">
          Add
        </button>
      </form>

      <div className="mt-4 flex gap-1">
        {(["all", "active", "done"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-md px-3 py-1 text-sm capitalize ${
              filter === f
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        {visibleTodos.length === 0 && (
          <li className="px-4 py-6 text-center text-sm text-slate-400">
            Nothing here yet.
          </li>
        )}
        {visibleTodos.map((task) => (
          <li
            key={task.id}
            className="group flex items-center gap-3 px-4 py-3"
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="size-4 accent-sky-600"
            />
            <span
              className={`flex-1 ${task.done ? "text-slate-400 line-through" : ""}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              aria-label={`Delete ${task.text}`}
              className="text-slate-400 opacity-0 hover:text-rose-600 group-hover:opacity-100"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex justify-between text-sm text-slate-500">
        <span>{remaining} left</span>
        <button
          onClick={clearCompleted}
          className="hover:text-slate-900"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}
