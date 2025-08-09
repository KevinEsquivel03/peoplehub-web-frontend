import { axiosInstance } from '../../../config/axios-config'
import type { User } from '../../../entities/User'

interface LoginCredentials {
    email: string
    password: string
}

interface LoginResponse {
    token: string
    user: User
}

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await axiosInstance.post('/auth/login', credentials)
    return response.data
}

export const getCurrentUser = async (): Promise<User> => {
    const response = await axiosInstance.get('/auth/me')
    return response.data
}