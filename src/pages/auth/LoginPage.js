import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthApi } from "../../features/auth/api/authApi";
import { AuthForm } from "../../features/auth/ui/AuthForm";
import { useAuth } from "../../features/auth/hooks/useAuth";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
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
  const handleLogin = async (data) => {
    const credentials = {
      email: data.email,
      password: data.password,
    };
    setIsLoading(true);
    setError("");
    try {
      const response = await AuthApi.loginUser(credentials);
      if (response.error) {
        setError(`Error de autenticación: ${response.error.message}`);
        return;
      }
      if (response.user) {
        login(response.user);
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.error("Error en login:", err);
      setError("Error en el servidor. Intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };
  console.log("LoginPage rendered, isAuthenticated:", isAuthenticated);
  return _jsx("div", {
    className: styles.loginContainer,
    children: _jsxs("div", {
      className: styles.loginCard,
      children: [
        _jsx("h2", {
          className: styles.title,
          children: "Bienvenido \uD83D\uDC4B",
        }),
        _jsx("p", {
          className: styles.subtitle,
          children: "Inicia sesi\u00F3n para continuar",
        }),
        error &&
          _jsx("div", {
            role: "alert",
            className: styles.errorAlert,
            children: error,
          }),
        _jsx(AuthForm, {
          onSubmit: handleLogin,
          isLoading: isLoading,
          buttonText: "Ingresar",
          fields: [
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
              autoComplete: "current-password",
              required: true,
            },
          ],
        }),
        _jsxs("div", {
          className: styles.linksContainer,
          children: [
            _jsxs("p", {
              children: [
                "\u00BFNo tienes cuenta?",
                " ",
                _jsx(Link, {
                  to: "/auth/register",
                  className: styles.link,
                  children: "Reg\u00EDstrate",
                }),
              ],
            }),
            _jsx("p", {
              children: _jsx(Link, {
                to: "/forgot-password",
                className: styles.link,
                children: "\u00BFOlvidaste tu contrase\u00F1a?",
              }),
            }),
          ],
        }),
      ],
    }),
  });
};
export default LoginPage;
