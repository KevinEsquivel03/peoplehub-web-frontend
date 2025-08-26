import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import Loading from "../../shared/ui/Loading";
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return _jsx(Loading, {});
  }
  if (!isAuthenticated) {
    return _jsx(Navigate, {
      to: "/auth/login",
      state: { from: location },
      replace: true,
    });
  }
  return _jsx(_Fragment, { children: children });
};
export default ProtectedRoute;
