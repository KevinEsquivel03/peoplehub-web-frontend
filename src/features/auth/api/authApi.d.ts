import type { AuthError, Session, User } from "@supabase/supabase-js";
export interface RegisterCredentials {
  email: string;
  password: string;
  displayName: string;
}
export declare class AuthApi {
  static registerUser(credentials: RegisterCredentials): Promise<{
    user: User | null;
    session: Session | null;
    error: AuthError | null;
  }>;
  static loginUser(credentials: { email: string; password: string }): Promise<{
    user: User | null;
    session: Session | null;
    error: AuthError | null;
  }>;
  static getCurrentUser(): Promise<User | null>;
  static logout(): Promise<{
    error: AuthError | null;
  }>;
}
