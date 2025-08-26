import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import AuthLayout from "../../layouts/auth/AuthLayout";
import HomePage from "../../pages/home/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../../pages/auth/LoginPage";
import Configuration from "../../pages/configuration/Configuration";
import Files from "../../pages/files/Files";
import AttendancePage from "../../pages/attendance/AttendancePage";
import RegisterPage from "../../pages/auth/RegisterPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: _jsx(ProtectedRoute, { children: _jsx(MainLayout, {}) }),
    children: [
      {
        index: true,
        element: _jsx(HomePage, {}),
      },
      {
        path: "config",
        element: _jsx(Configuration, {}),
      },
      {
        path: "files",
        element: _jsx(Files, {}),
      },
      {
        path: "attendance",
        element: _jsx(AttendancePage, {}),
      },
      {
        path: "*",
        element: _jsx(Navigate, { to: "/", replace: true }),
      },
    ],
  },
  {
    path: "/auth",
    element: _jsx(AuthLayout, {}),
    children: [
      {
        path: "login",
        element: _jsx(LoginPage, {}),
      },
      {
        path: "register",
        element: _jsx(RegisterPage, {}),
      },
      {
        index: true,
        element: _jsx(Navigate, { to: "/auth/login", replace: true }),
      },
    ],
  },
  {
    path: "*",
    element: _jsx(Navigate, { to: "/auth/login", replace: true }),
  },
]);
