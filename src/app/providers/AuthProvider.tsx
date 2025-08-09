import { createContext, useState, useEffect, type ReactNode } from 'react'
import type { User } from '../../entities/User'
import { getCurrentUser } from '../../features/auth/api/authApi'
import type { AuthResponse } from '../../features/auth/model/types'

interface AuthContextType {
    isAuthenticated: boolean
    user: User | null
    login: (response: AuthResponse) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(!!user)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('accessToken')
                if (token) {
                    const userData = await getCurrentUser()
                    console.log(userData)
                    setUser(userData)
                    setIsAuthenticated(true)
                }
            } catch (error) {
                console.error('Failed to fetch user', error)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    const login = (response: AuthResponse) => {
        localStorage.setItem('accessToken', response.access_token)
        localStorage.setItem('user', JSON.stringify(response.user))
    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        setUser(null)
    }

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