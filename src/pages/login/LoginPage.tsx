import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../features/auth/hooks/useAuth'
import { loginUser } from '../../features/auth/api/authApi'
import type { AuthError } from '@supabase/supabase-js'
import type { AuthResponse } from '../../features/auth/model/types'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            window.location.href = '/'
        }
        setError('')
    }, [email, password, isAuthenticated, navigate])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await loginUser({ email, password })
            if (response as AuthError) {
                setError('Credenciales incorrectas ' + (response as AuthError).message)
                return
            }
            login(response as AuthResponse)
            window.location.href = '/'
        } catch (err) {
            console.error(err)
            setError('Credenciales incorrectas')
        }
    }

    return (
        <div className="login-page">
            <h2>Iniciar sesión</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginPage