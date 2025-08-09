import type { User } from "../../../entities/User"

export interface Credentials {
    email: string
    password: string
}

export interface RegisterCredentials {
    email: string,
    password: string,
    data: {
        display_name: string
    }
}
export interface AuthResponse {
    access_token: string
    token_type: string
    expires_in: number
    expires_at: number
    refresh_token: string
    user: User
}