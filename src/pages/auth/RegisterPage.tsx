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

  const handleRegister = async (data: Record<string, string>) => {
    const credentials: {
      email: string;
      password: string;
      confirmPassword: string;
      name: string;
    } = {
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

  console.log("RegisterPage rendered, isAuthenticated:", isAuthenticated);

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>
        <h2 className={styles.title}>Crear cuenta 🚀</h2>
        <p className={styles.subtitle}>Únete a nuestra comunidad</p>

        {error && (
          <div role="alert" className={styles.errorAlert}>
            {error}
          </div>
        )}

        <AuthForm
          onSubmit={handleRegister}
          isLoading={isLoading}
          buttonText="Crear cuenta"
          fields={[
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
          ]}
        />

        <div className={styles.linksContainer}>
          <p>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className={styles.link}>
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
