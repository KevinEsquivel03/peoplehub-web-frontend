import React, { useState } from "react";
import styles from "./AuthFotm.module.css";

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

export function AuthForm<T extends Record<string, string>>({
  onSubmit,
  isLoading,
  buttonText = "Enviar",
  fields,
}: AuthFormProps<T>) {
  const [formData, setFormData] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((f) => [f.id as string, ""])),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as T);
  };

  return (
    <div className={styles.authForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {fields.map((field) => (
          <div key={field.id as string} className={styles.field}>
            <label htmlFor={field.id as string} className={styles.label}>
              {field.label}
            </label>
            <input
              id={field.id as string}
              type={field.type}
              value={formData[field.id as string]}
              onChange={handleChange}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required={field.required}
              disabled={isLoading}
              className={styles.input}
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
          className={isLoading ? styles.buttonLoading : styles.button}
        >
          {isLoading ? "Cargando..." : buttonText}
        </button>
      </form>
    </div>
  );
}
