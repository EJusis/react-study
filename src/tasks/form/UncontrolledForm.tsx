// Variant 2 — uncontrolled inputs. Build it yourself!
//
// Same form as the controlled version, but the DOM holds the values, not React state.
// Reuse the rules from ./validation so all three variants behave the same.
//
// Requirements:
//   [ ] 1. Same fields: name, email, password, confirm password, "I accept the terms" checkbox
//   [ ] 2. No value / checked props on the inputs (use defaultValue / defaultChecked if needed)
//   [ ] 3. Validate with validateForm from ./validation
//   [ ] 4. Show a field's error only after the user has left that field (on blur) or tried to submit
//   [ ] 5. Disable the submit button while the form is invalid
//   [ ] 6. On submit, prevent the page reload and show a success message with the entered name
//   [ ] 7. A "Reset" button clears all fields, errors and the success message
//
// Hints (open only when you get stuck):
//   - new FormData(e.currentTarget) reads every named input of the form at once
//   - A checkbox appears in FormData only when it's checked
//   - Errors can't be derived from state on every render here; decide when to recompute them
//   - <button type="reset"> clears the DOM inputs, but not your React state

export default function UncontrolledForm() {
  const handleSubmit = () => {};
  return (
    <form
      action=""
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
          autoComplete="email"
          id="email-input"
          type="email"
          name="email"
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          required
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
          autoComplete="password"
          id="password-input"
          type="password"
          name="password"
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
      </div>
    </form>
  );
}
