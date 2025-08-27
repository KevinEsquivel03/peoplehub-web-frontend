// hooks/useTheme.ts
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Obtener tema guardado o usar preferencia del sistema
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    setIsDark(initialDark);
    document.documentElement.setAttribute(
      "data-theme",
      initialDark ? "dark" : "light",
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";

    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { isDark, toggleTheme };
};
