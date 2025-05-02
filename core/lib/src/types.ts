export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined,
  variant?: 'primary' | 'secondary' | 'danger',
  size?: 'sm' | 'md' | 'lg',
  class?: string,
  disabled?: boolean
  label: string;
}

export interface CheckboxProps {
  modelValue?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  id?: string;
}

export interface TextInputProps {
  type?: "text-area" | "email" | "phone-number",
  size?: "sm" | "md" | "lg"
  class?: string
}