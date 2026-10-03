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
  return <p className="text-slate-500">Uncontrolled form — not built yet.</p>;
}
