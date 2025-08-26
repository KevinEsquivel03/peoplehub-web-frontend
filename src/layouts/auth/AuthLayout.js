import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";
const AuthLayout = () => {
  return _jsx("div", {
    className: styles.authLayout,
    children: _jsx("div", { children: _jsx(Outlet, {}) }),
  });
};
export default AuthLayout;
