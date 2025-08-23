import { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { AuthApi } from '../../features/auth/api/authApi'
import { AuthForm } from '../../features/auth/ui/auth/AuthForm'
import { useAuth } from '../../features/auth/hooks/useAuth'
import styles from './LoginPage.module.css'

const LoginPage = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { login, isAuthenticated } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (isAuthenticated) {
            const from = location.state?.from?.pathname || '/'
            navigate(from, { replace: true })
        }
    }, [isAuthenticated, navigate, location])

    const handleLogin = async (data: Record<string, string>) => {
        const credentials: { email: string; password: string } = {
            email: data.email,
            password: data.password,
        }

        setIsLoading(true)
        setError('')

        try {
            const response = await AuthApi.loginUser(credentials)

            if (response.error) {
                setError(`Error de autenticación: ${response.error.message}`)
                return
            }

            if (response.user) {
                login(response.user)
                navigate('/', { replace: true })
            }
        } catch (err) {
            console.error('Error en login:', err)
            setError('Error en el servidor. Intente nuevamente.')
        } finally {
            setIsLoading(false)
        }
    }

    console.log('LoginPage rendered, isAuthenticated:', isAuthenticated)

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <h2 className={styles.title}>
                    Bienvenido 👋
                </h2>
                <p className={styles.subtitle}>
                    Inicia sesión para continuar
                </p>

                {error && (
                    <div
                        role="alert"
                        className={styles.errorAlert}
                    >
                        {error}
                    </div>
                )}

                <AuthForm
                    onSubmit={handleLogin}
                    isLoading={isLoading}
                    buttonText="Ingresar"
                    fields={[
                        {
                            id: 'email',
                            label: 'Email',
                            type: 'email',
                            placeholder: 'ejemplo@correo.com',
                            autoComplete: 'email',
                            required: true,
                        },
                        {
                            id: 'password',
                            label: 'Contraseña',
                            type: 'password',
                            placeholder: '••••••••',
                            autoComplete: 'current-password',
                            required: true,
                        },
                    ]}
                />

                <div className={styles.linksContainer}>
                    <p>
                        ¿No tienes cuenta?{' '}
                        <Link
                            to="/register"
                            className={styles.link}
                        >
                            Regístrate
                        </Link>
                    </p>
                    <p>
                        <Link
                            to="/forgot-password"
                            className={styles.link}
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage