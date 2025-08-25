import { supabase } from "../../../config/supabase-client";
import type { AuthError, Session, User } from "@supabase/supabase-js";

export interface RegisterCredentials {
  email: string;
  password: string;
  displayName: string;
}

export class AuthApi {
  static async registerUser(credentials: RegisterCredentials): Promise<{
    user: User | null;
    session: Session | null;
    error: AuthError | null;
  }> {
    const { email, password, displayName } = credentials;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          displayName,
        },
      },
    });
    return { user: data.user, session: data.session, error };
  }

  static async loginUser(credentials: {
    email: string;
    password: string;
  }): Promise<{
    user: User | null;
    session: Session | null;
    error: AuthError | null;
  }> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });
    return { user: data.user, session: data.session, error };
  }

  static async getCurrentUser(): Promise<User | null> {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error("❌ Failed to get user:", error.message);
      return null;
    }
    return data.user;
  }

  static async logout(): Promise<{ error: AuthError | null }> {
    const { error } = await supabase.auth.signOut();
    return { error };
  }
}
