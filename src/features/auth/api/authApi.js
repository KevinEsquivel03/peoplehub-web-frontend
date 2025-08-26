import { supabase } from "../../../config/supabase-client";
export class AuthApi {
  static async registerUser(credentials) {
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
  static async loginUser(credentials) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });
    return { user: data.user, session: data.session, error };
  }
  static async getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error("❌ Failed to get user:", error.message);
      return null;
    }
    return data.user;
  }
  static async logout() {
    const { error } = await supabase.auth.signOut();
    return { error };
  }
}
