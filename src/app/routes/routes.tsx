import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import AuthLayout from '../../layouts/auth/AuthLayout';
import HomePage from '../../pages/home/HomePage';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../../pages/auth/LoginPage';
import Configuration from '../../pages/configuration/Configuration';
import Files from '../../pages/files/Files';
import AttendancePage from '../../pages/attendance/AttendancePage';

export const router = createBrowserRouter([
    {
        path: '/',
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
                path: 'config',
                element: <Configuration />,
            },
            {
                path: 'files',
                element: <Files />,
            },
            {
                path: 'attendance',
                element: <AttendancePage />,
            },
            {
                path: '',
                element: <Navigate to="/auth/login" replace />,
            },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                index: true,
                element: <Navigate to="/auth/login" replace />,
            },
            {
                path: '*',
                element: <Navigate to="/auth/login" replace />,
            },
        ],
    },
]);