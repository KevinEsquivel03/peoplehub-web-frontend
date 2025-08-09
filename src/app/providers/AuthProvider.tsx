import { createContext, useState, useEffect, type ReactNode } from 'react'
import type { User } from '../../entities/User'
import { getCurrentUser } from '../../features/auth/api/authApi'

interface AuthContextType {
    isAuthenticated: boolean
    user: User | null
    login: (token: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('accessToken')
                if (token) {
                    const userData = await getCurrentUser()
                    setUser(userData)
                }
            } catch (error) {
                console.error('Failed to fetch user', error)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    const login = (token: string) => {
        localStorage.setItem('accessToken', token)
    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        setUser(null)
    }

    const isAuthenticated = !!user

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;