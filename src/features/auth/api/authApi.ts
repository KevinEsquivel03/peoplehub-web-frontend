import { AuthError } from '@supabase/supabase-js'
import { axiosInstance } from '../../../config/axios-config'
import type { User } from '../../../entities/User'
import type { AuthResponse, Credentials, RegisterCredentials } from '../model/types'

export const loginUser = async (credentials: Credentials): Promise<AuthResponse | AuthError> => {
    const response = await axiosInstance.post('/auth/v1/token?grant_type=password', credentials)
    return response.data
}

export const registerUser = async (credentials: RegisterCredentials): Promise<AuthResponse | AuthError> => {
    const response = await axiosInstance.post('/auth/v1/signup', credentials)
    return response.data
}

export const getCurrentUser = async (): Promise<User> => {
    const user: User = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
    return user
}