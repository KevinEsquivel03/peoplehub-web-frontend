import type { User } from "../../../entities/User"

export interface Credentials {
    email: string
    password: string
}

export interface AuthResponse {
    user: User
    token: string
}