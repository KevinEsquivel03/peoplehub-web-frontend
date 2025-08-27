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
import NotFound from "../../pages/not-found/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <Navigate to="/" replace />,
      },
      {
        path: "saved",
        element: <Navigate to="/" replace />,
      },
      {
        path: "files",
        element: <Files />,
      },
      {
        path: "sync",
        element: <Navigate to="/" replace />,
      },
      {
        path: "config",
        element: <Configuration />,
      },
      {
        path: "attendance",
        element: <AttendancePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot-password",
        element: <Navigate to="/auth/login" replace />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
