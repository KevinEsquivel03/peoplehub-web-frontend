import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { AuthApi } from "../../features/auth/api/authApi";
import { AuthError } from "@supabase/supabase-js";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
    setError("");
  }, [email, password, isAuthenticated, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthApi.loginUser({ email, password });
      if (response instanceof AuthError || !response) {
        setError("Credenciales incorrectas " + response.message);
        return;
      }
      login(response.user);
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      setError("Credenciales incorrectas");
    }
  };
  return _jsxs("div", {
    className: "login-page",
    children: [
      _jsx("h2", { children: "Iniciar sesi\u00F3n" }),
      error && _jsx("p", { className: "error", children: error }),
      _jsxs("form", {
        onSubmit: handleSubmit,
        children: [
          _jsxs("div", {
            children: [
              _jsx("label", { htmlFor: "email", children: "Email:" }),
              _jsx("input", {
                id: "email",
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true,
              }),
            ],
          }),
          _jsxs("div", {
            children: [
              _jsx("label", {
                htmlFor: "password",
                children: "Contrase\u00F1a:",
              }),
              _jsx("input", {
                id: "password",
                type: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                required: true,
              }),
            ],
          }),
          _jsx("button", { type: "submit", children: "Ingresar" }),
        ],
      }),
    ],
  });
};
export default LoginPage;
