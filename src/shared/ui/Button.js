import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const Button = ({ children, variant = "primary", ...props }) => {
  const baseClasses = "py-2 px-4 rounded font-medium";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };
  return _jsx("button", {
    className: `${baseClasses} ${variantClasses[variant]}`,
    ...props,
    children: children,
  });
};
