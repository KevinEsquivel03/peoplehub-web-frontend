import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthApi } from "../../features/auth/api/authApi";
import { AuthForm } from "../../features/auth/ui/AuthForm";
import { useAuth } from "../../features/auth/hooks/useAuth";
import styles from "./RegisterPage.module.css";
const RegisterPage = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);
  const handleRegister = async (data) => {
    const credentials = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      name: data.name,
    };
    if (credentials.password !== credentials.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await AuthApi.registerUser({
        email: credentials.email,
        password: credentials.password,
        displayName: credentials.name,
      });
      if (response.error) {
        setError(`Error de registro: ${response.error.message}`);
        return;
      }
      if (response.user) {
        login(response.user);
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.error("Error en registro:", err);
      setError("Error en el servidor. Intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };
  return _jsx("div", {
    className: styles.registerContainer,
    children: _jsxs("div", {
      className: styles.registerCard,
      children: [
        _jsx("h2", {
          className: styles.title,
          children: "Crear cuenta \uD83D\uDE80",
        }),
        _jsx("p", {
          className: styles.subtitle,
          children: "\u00DAnete a nuestra comunidad",
        }),
        error &&
          _jsx("div", {
            role: "alert",
            className: styles.errorAlert,
            children: error,
          }),
        _jsx(AuthForm, {
          onSubmit: handleRegister,
          isLoading: isLoading,
          buttonText: "Crear cuenta",
          fields: [
            {
              id: "name",
              label: "Nombre completo",
              type: "text",
              placeholder: "Ej: Juan Pérez",
              autoComplete: "name",
              required: true,
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              placeholder: "ejemplo@correo.com",
              autoComplete: "email",
              required: true,
            },
            {
              id: "password",
              label: "Contraseña",
              type: "password",
              placeholder: "••••••••",
              autoComplete: "new-password",
              required: true,
            },
            {
              id: "confirmPassword",
              label: "Confirmar contraseña",
              type: "password",
              placeholder: "••••••••",
              autoComplete: "new-password",
              required: true,
            },
          ],
        }),
        _jsx("div", {
          className: styles.linksContainer,
          children: _jsxs("p", {
            children: [
              "\u00BFYa tienes cuenta?",
              " ",
              _jsx(Link, {
                to: "/login",
                className: styles.link,
                children: "Inicia sesi\u00F3n",
              }),
            ],
          }),
        }),
      ],
    }),
  });
};
export default RegisterPage;
