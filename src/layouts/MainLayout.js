import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useAuth } from "../features/auth/hooks/useAuth";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { Button } from "../shared/ui/Button";
const MainLayout = () => {
  const { logout, user } = useAuth();
  return _jsxs("div", {
    className: styles.Layout,
    children: [
      _jsx("div", {
        className: styles.layout__sidebar,
        children: _jsx(Sidebar, {}),
      }),
      _jsx("div", {
        className: styles.layout__divider,
        children: _jsx("div", {
          className: styles.layout__dividerLine,
          children: _jsxs(Button, {
            variant: "secondary",
            onClick: logout,
            children: ["Log out ", user?.displayName],
          }),
        }),
      }),
      _jsxs("div", {
        className: styles.layout__main,
        children: [
          _jsx("div", {
            className: styles.layout__navbar,
            children: _jsx(Navbar, {}),
          }),
          _jsx("div", {
            className: styles.layout__content,
            children: _jsx(Outlet, {}),
          }),
        ],
      }),
    ],
  });
};
export default MainLayout;
