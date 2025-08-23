import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import AuthLayout from '../../layouts/auth/AuthLayout';
import HomePage from '../../pages/home/HomePage';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../../pages/auth/LoginPage';
import Configuration from '../../pages/configuration/Configuration';
import Files from '../../pages/files/Files';

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
        ],
    },
    {
        path: '*',
        element: <Navigate to="/auth/login" replace />,
    },
]);