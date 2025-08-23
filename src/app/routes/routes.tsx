import { createBrowserRouter } from 'react-router-dom';
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
            {
                path: 'config',
                element: (
                    <ProtectedRoute>
                        <Configuration />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'files',
                element: (
                    <ProtectedRoute>
                        <Files />
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