// Variant 3 — react-hook-form. Build it yourself!
//
// Install first: npm install react-hook-form
// Reuse EMAIL_REGEX and the error messages from ./validation so all three variants behave the same.
//
// Requirements:
//   [ ] 1. Same fields: name, email, password, confirm password, "I accept the terms" checkbox
//   [ ] 2. Inputs are connected with register()
//   [ ] 3. Same validation rules (required, pattern, minLength, validate for matching passwords)
//   [ ] 4. Show a field's error only after the user has left that field (on blur) or tried to submit
//   [ ] 5. Disable the submit button while the form is invalid
//   [ ] 6. On submit, show a success message with the entered name
//   [ ] 7. A "Reset" button clears all fields, errors and the success message
//
// Hints (open only when you get stuck):
//   - useForm<FormSchemaType>({ mode: "onTouched", defaultValues: initialFormData })
//   - formState.errors and formState.isValid replace your own errors / isValid
//   - handleSubmit(onValid) already calls preventDefault for you
//   - watch("password") or validate: (value, values) => ... for the confirm field
//   - reset() puts every field back to defaultValues

export default function HookForm() {
  return <p className="text-slate-500">react-hook-form version — not built yet.</p>;
}
