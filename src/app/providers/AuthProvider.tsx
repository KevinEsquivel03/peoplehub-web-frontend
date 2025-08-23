// src/context/AuthContext.tsx
import { createContext, useState, useEffect, type ReactNode } from 'react'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { supabase } from '../../config/supabase-client'

export interface AppUser {
    id: string
    email: string
    displayName?: string
}

interface AuthContextType {
    isAuthenticated: boolean
    user: AppUser | null
    login: (user: SupabaseUser) => void
    logout: () => void
    loading: boolean // 👈 Exponemos loading
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AppUser | null>(null)
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // 🔥 Mejor manejo de la sesión de Supabase
    useEffect(() => {
        // Obtener sesión actual
        const getInitialSession = async () => {
            try {
                const { data: { session }, error } = await supabase.auth.getSession()

                if (error) {
                    console.error('Error getting session:', error)
                    return
                }

                if (session?.user) {
                    const appUser: AppUser = {
                        id: session.user.id,
                        email: session.user.email!,
                        displayName: session.user.user_metadata?.displayName,
                    }
                    setUser(appUser)
                    setIsAuthenticated(true)
                }
            } catch (error) {
                console.error('Failed to get initial session:', error)
            } finally {
                setLoading(false)
            }
        }

        getInitialSession()

        // Escuchar cambios en la autenticación
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (event === 'SIGNED_IN' && session?.user) {
                    const appUser: AppUser = {
                        id: session.user.id,
                        email: session.user.email!,
                        displayName: session.user.user_metadata?.displayName,
                    }
                    setUser(appUser)
                    setIsAuthenticated(true)
                } else if (event === 'SIGNED_OUT') {
                    setUser(null)
                    setIsAuthenticated(false)
                }
                setLoading(false)
            }
        )

        return () => subscription.unsubscribe()
    }, [])

    const login = (supabaseUser: SupabaseUser) => {
        const appUser: AppUser = {
            id: supabaseUser.id,
            email: supabaseUser.email!,
            displayName: supabaseUser.user_metadata?.displayName,
        }
        setUser(appUser)
        setIsAuthenticated(true)
        // ❌ Evita window.location.href, usa navigate en su lugar
    }

    const logout = async () => {
        try {
            await supabase.auth.signOut()
            setUser(null)
            setIsAuthenticated(false)
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }

    // 🎨 Loading component más visual
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Cargando...</p>
                </div>
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext