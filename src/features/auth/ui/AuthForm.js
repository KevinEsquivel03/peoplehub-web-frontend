import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import styles from "./AuthForm.module.css";
export function AuthForm({
  onSubmit,
  isLoading,
  buttonText = "Enviar",
  fields,
}) {
  const [formData, setFormData] = useState(
    Object.fromEntries(fields.map((f) => [f.id, ""])),
  );
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return _jsx("div", {
    className: styles.authForm,
    children: _jsxs("form", {
      onSubmit: handleSubmit,
      className: styles.form,
      children: [
        fields.map((field) =>
          _jsxs(
            "div",
            {
              className: styles.field,
              children: [
                _jsx("label", {
                  htmlFor: field.id,
                  className: styles.label,
                  children: field.label,
                }),
                _jsx("input", {
                  id: field.id,
                  type: field.type,
                  value: formData[field.id],
                  onChange: handleChange,
                  placeholder: field.placeholder,
                  autoComplete: field.autoComplete,
                  required: field.required,
                  disabled: isLoading,
                  className: styles.input,
                }),
              ],
            },
            field.id,
          ),
        ),
        _jsx("button", {
          type: "submit",
          disabled: isLoading,
          "aria-busy": isLoading,
          className: isLoading ? styles.buttonLoading : styles.button,
          children: isLoading ? "Cargando..." : buttonText,
        }),
      ],
    }),
  });
}
