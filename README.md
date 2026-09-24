# React Study

Small React projects for practice and for showing in interviews.
Built with **Vite**, **React + TypeScript**, **Tailwind CSS v4** and **React Router**.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Structure

```
src/
  App.tsx              # routes — one per task, generated from the registry
  components/          # Layout (header), TaskCard
  pages/               # HomePage (card grid), NotFoundPage
  tasks/
    registry.ts        # list of all tasks — the single place to register a new one
    todo/              # /to-do
    routing/           # /routing
```

## Adding a new task

1. Create `src/tasks/<name>/<Name>Task.tsx` with a default-exported component.
2. Add an entry to `src/tasks/registry.ts`:

```ts
{
  slug: 'counter',
  title: 'Counter',
  description: 'Increment, decrement, reset.',
  difficulty: 'Easy',
  concepts: ['useState'],
  component: lazy(() => import('./counter/CounterTask')),
},
```

The homepage card and the `/counter` route appear automatically.
