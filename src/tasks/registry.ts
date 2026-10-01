import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Task {
  /** URL path segment — the task lives at `/${slug}` */
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  /** React concepts this task practices, shown as tags on the card */
  concepts: string[];
  component: LazyExoticComponent<ComponentType>;
}

/**
 * Add a new task:
 *   1. Create a folder in src/tasks/<name>/ with a default-exported component
 *   2. Add an entry below — the homepage card and the route are created automatically
 */
export const tasks: Task[] = [
  {
    slug: "to-do",
    title: "To-Do List",
    description:
      "Add, complete, filter and delete tasks. Items persist in localStorage.",
    difficulty: "Easy",
    concepts: ["useState", "useEffect", "Lists & keys", "Forms"],
    component: lazy(() => import("./todo/TodoTask")),
  },
  {
    slug: "form",
    title: "Sign-Up Form",
    description:
      "Controlled inputs with validation, touched-field errors and a success state.",
    difficulty: "Medium",
    concepts: ["useState", "Controlled inputs", "Forms", "Derived state"],
    component: lazy(() => import("./form/FormTask")),
  },
];
