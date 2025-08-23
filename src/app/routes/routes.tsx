// src/router/index.ts
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import AuthLayout from '../../layouts/auth/AuthLayout';
import HomePage from '../../pages/home/HomePage';
import LoginPage from '../../pages/auth/LoginPage';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                ),
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
        ],
    },
]);