import type { Credentials } from "../../features/auth/model/types";
export declare const authProcess: (credentials: Credentials) => Promise<{
  user: import("@supabase/auth-js").User | null;
  session: import("@supabase/auth-js").Session | null;
  error: import("@supabase/auth-js").AuthError | null;
}>;
