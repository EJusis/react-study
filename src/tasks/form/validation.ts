// Shared by all three form variants, so they validate exactly the same way.

export type FormSchemaType = {
  name: string;
  email: string;
  password: string;
  isAcceptedTerms: boolean;
};

export type FormErrors = Partial<Record<keyof FormSchemaType, string>>;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const initialFormData: FormSchemaType = {
  name: "",
  email: "",
  password: "",
  isAcceptedTerms: false,
};

export function validateForm(formData: FormSchemaType): FormErrors {
  const errors: FormErrors = {};
  if (!formData.name.trim()) errors.name = "Name is required";
  if (!EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = "Enter a valid email address";
  }
  if (formData.password.length < 8) {
    errors.password = "Password must contain at least 8 characters";
  }
  if (!formData.isAcceptedTerms) {
    errors.isAcceptedTerms = "Terms and Conditions must be accepted";
  }

  return errors;
}
