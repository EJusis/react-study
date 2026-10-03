// Sign-Up Form — three ways to build the same form.
//
// This component is lazy-loaded from src/tasks/registry.ts and rendered at /form.
// It only switches between the variants; each one lives in its own file:
//   - ControlledForm.tsx   — values live in React state
//   - UncontrolledForm.tsx — values live in the DOM
//   - HookForm.tsx         — values managed by react-hook-form
// Shared types and validation rules are in validation.ts.

import { useSearchParams } from "react-router-dom";
import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";
import HookForm from "./HookForm";

const variants = [
  { id: "controlled", label: "Controlled", component: ControlledForm },
  { id: "uncontrolled", label: "Uncontrolled", component: UncontrolledForm },
  { id: "hook-form", label: "React Hook Form", component: HookForm },
] as const;

export default function FormTask() {
  const [searchParams, setSearchParams] = useSearchParams();
  const active =
    variants.find((v) => v.id === searchParams.get("variant")) ?? variants[0];
  const ActiveForm = active.component;

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-6 text-2xl font-bold">Sign-Up Form</h1>

      <div className="mb-4 flex gap-1">
        {variants.map((v) => (
          <button
            key={v.id}
            onClick={() => setSearchParams({ variant: v.id })}
            className={`rounded-md px-3 py-1 text-sm ${
              active.id === v.id
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-200"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* key makes switching tabs start the form fresh */}
      <ActiveForm key={active.id} />
    </div>
  );
}
