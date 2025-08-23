import React, { useState } from 'react'
import type { Credentials } from '../model/types'

interface AuthFormProps {
    onSubmit: (credentials: Credentials) => void
    isLoading: boolean
}

export const AuthForm = ({ onSubmit, isLoading }: AuthFormProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({ email, password })
    }

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Iniciar sesión'}
            </button>
        </form>
    )
}