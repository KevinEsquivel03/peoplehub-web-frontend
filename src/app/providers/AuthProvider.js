import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react";
import { supabase } from "../../config/supabase-client";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const getInitialSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) {
          console.error("Error getting session:", error);
          return;
        }
        if (session?.user) {
          const appUser = {
            id: session.user.id,
            email: session.user.email,
            displayName: session.user.user_metadata?.displayName,
          };
          setUser(appUser);
          setIsAuthenticated(true);
          console.log("Session loaded:", session);
        }
      } catch (error) {
        console.error("Failed to get initial session:", error);
      } finally {
        setLoading(false);
      }
    };
    getInitialSession();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth event:", event);
      if (event === "SIGNED_IN" && session?.user) {
        const appUser = {
          id: session.user.id,
          email: session.user.email,
          displayName: session.user.user_metadata?.displayName,
        };
        setUser(appUser);
        setIsAuthenticated(true);
        console.log("Signed in user:", session.user);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);
  const login = (user) => {
    if (user) {
      const appUser = {
        id: user.id,
        email: user.email,
        displayName: user.user_metadata?.displayName,
      };
      setUser(appUser);
      setIsAuthenticated(true);
    } else {
      console.error("No user provided");
    }
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
  return _jsx(AuthContext.Provider, {
    value: {
      isAuthenticated,
      user,
      login,
      logout,
      loading,
    },
    children: children,
  });
};
export default AuthContext;
