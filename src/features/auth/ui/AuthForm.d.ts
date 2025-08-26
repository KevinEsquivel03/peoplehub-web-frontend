interface AuthFormProps<T extends Record<string, string>> {
  onSubmit: (data: T) => void;
  isLoading: boolean;
  buttonText?: string;
  fields: {
    id: keyof T;
    label: string;
    type: string;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
  }[];
}
export declare function AuthForm<T extends Record<string, string>>({
  onSubmit,
  isLoading,
  buttonText,
  fields,
}: AuthFormProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
