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

export default function TodoTask() {
  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-6 text-2xl font-bold">To-Do List</h1>
      <p className="text-slate-500">Start building here…</p>
    </div>
  )
}
