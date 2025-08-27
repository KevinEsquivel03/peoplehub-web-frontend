import Configuration from "../../pages/configuration/Configuration";
import AttendancePage from "../../pages/attendance/AttendancePage";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../../layouts/auth/AuthLayout";
import LoginPage from "../../pages/auth/LoginPage";
import MainLayout from "../../layouts/MainLayout";
import HomePage from "../../pages/home/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Files from "../../pages/files/Files";

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
        path: "config",
        element: <Configuration />,
      },
      {
        path: "files",
        element: <Files />,
      },
      {
        path: "attendance",
        element: <AttendancePage />,
      },
      {
        path: "",
        element: <Navigate to="/auth/login" replace />,
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
        index: true,
        element: <Navigate to="/auth/login" replace />,
      },
      {
        path: "*",
        element: <Navigate to="/auth/login" replace />,
      },
    ],
  },
]);
