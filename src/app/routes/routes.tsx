import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import HomePage from '../../pages/home/HomePage';
import LoginPage from '../../pages/login/LoginPage';
import Configuration from '../../pages/configuration/Configuration';
import Files from '../../pages/files/Files';
//import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    // <ProtectedRoute>
                        <HomePage />
                    //</ProtectedRoute>
                ),
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'config', 
                element: (
                    // <ProtectedRoute>
                        <Configuration />
                    //</ProtectedRoute>
                ),
            },
            {
                path: 'files', 
                element: (
                    // <ProtectedRoute>
                        <Files />
                    //</ProtectedRoute>
                ),
            },
        ],
    },
]);