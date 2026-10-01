// Sign-Up Form — build it yourself!
//
// This component is already wired up: it's lazy-loaded from src/tasks/registry.ts
// and rendered at /form. Keep the default export and build everything inside it.
//
// Requirements:
//   [ ] 1. Fields: name, email, password, confirm password, and an "I accept the terms" checkbox
//   [ ] 2. All inputs are controlled (their values live in state)
//   [ ] 3. Validate: name required, email looks like an email, password ≥ 8 chars,
//          passwords match, terms accepted
//   [ ] 4. Show a field's error only after the user has left that field (on blur) or tried to submit
//   [ ] 5. Disable the submit button while the form is invalid
//   [ ] 6. On submit, prevent the page reload and show a success message with the entered name
//   [ ] 7. A "Reset" button clears all fields, errors and the success message
//
// Hints (open only when you get stuck):
//   - One state object for all fields + one generic onChange handler using e.target.name
//   - Checkboxes use e.target.checked, not e.target.value
//   - Errors can be calculated during render from the values; they don't need their own state
//   - Track which fields were "touched" in a separate state object

import { useState } from "react";

type FormSchemaType = {
  name: string;
  email: string;
  password: string;
  isAcceptedTerms: boolean;
};

type FormErrors = Partial<Record<keyof FormSchemaType, string>>;

function validateForm(formData: FormSchemaType): FormErrors {
  const errors: FormErrors = {};
  if (!formData.name.trim()) errors.name = "Name is required";
  if (!EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = "Enter a valid email address";
  }
  if (formData.password.trim().length <= 8) {
    errors.password = "Password must contain at least 8 characters";
  }
  if (!formData.isAcceptedTerms) {
    errors.isAcceptedTerms = "Terms and Conditions must be accepted";
  }

  return errors;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormData: FormSchemaType = {
  name: "",
  email: "",
  password: "",
  isAcceptedTerms: false,
};

export default function FormTask() {
  const [formData, setFormData] = useState<FormSchemaType>(initialFormData);

  const errors = validateForm(formData);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="mb-6 text-2xl font-bold">Sign-Up Form</h1>
      <form
        className="space-y-4 rounded-lg border border-slate-200 bg-white p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name-input"
            className="text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email-input"
            className="text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="email-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password-input"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="password-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          {/* Error message style: <p className="text-sm text-rose-600">…</p> */}
        </div>
        <div className="flex items-center gap-2">
          <input
            id="checkbox-input"
            type="checkbox"
            name="isAcceptedTerms"
            checked={formData.isAcceptedTerms}
            onChange={handleChange}
            className="size-4 accent-sky-600"
          />
          <label
            htmlFor="checkbox-input"
            className="text-sm text-slate-700"
          >
            I accept the terms
          </label>
        </div>
        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Sign up
          </button>
          <button
            type="button"
            className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-600 hover:bg-slate-100"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
