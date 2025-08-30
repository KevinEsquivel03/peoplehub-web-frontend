import { createContext, useState, useEffect, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../../config/supabase-client";

export interface AppUser {
  id: string;
  email: string;
  displayName?: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: AppUser | null;
  login: (user: User | null) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        const session = await supabase.auth.getSession();
        if (session.error || !session.data?.session?.user) {
          return;
        }

        setUser({
          id: session.data.session.user.id,
          email: session.data.session.user.email!,
          displayName: session.data.session.user.user_metadata?.displayName,
        });
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to get initial session:", error);
      } finally {
        setLoading(false);
      }
    };

    initialize();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth event:", event);

      setLoading(true);

      if (event === "SIGNED_IN" && session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email!,
          displayName: session.user.user_metadata?.displayName,
        });
        setIsAuthenticated(true);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setIsAuthenticated(false);
      }

      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = (user: User | null) => {
    if (!user) {
      console.error("No user provided");
      return;
    }

    setUser({
      id: user.id,
      email: user.email!,
      displayName: user.user_metadata?.displayName,
    });
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
