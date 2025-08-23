import { AuthApi } from '../../features/auth/api/authApi'
import type { Credentials } from '../../features/auth/model/types'

export const authProcess = async (credentials: Credentials) => {
    try {
        const response = await AuthApi.loginUser(credentials)
        return response
    } catch (error) {
        throw new Error('Error en el proceso de autenticación', { cause: error })
    }
}