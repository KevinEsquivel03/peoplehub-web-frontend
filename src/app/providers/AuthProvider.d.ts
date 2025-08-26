import { type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
export interface AppUser {
  id: string;
  email: string;
  displayName?: string;
}
export interface AuthContextType {
  isAuthenticated: boolean;
  user: AppUser | null;
  login: (user?: User | null) => void;
  logout: () => void;
  loading: boolean;
}
declare const AuthContext: import("react").Context<AuthContextType | null>;
export declare const AuthProvider: ({
  children,
}: {
  children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default AuthContext;
