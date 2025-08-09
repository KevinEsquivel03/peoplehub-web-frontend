import { Outlet } from 'react-router-dom'
import { useAuth } from '../features/auth/hooks/useAuth'
import { Button } from '../shared/ui/Button'

const MainLayout = () => {
    const { logout, user } = useAuth()

    return (
        <div className="main-layout">
            <header>
                <nav>
                    <h1>Mi Aplicación</h1>
                    {user && (
                        <div>
                            <span>Hola, {user.user_metadata.display_name}</span>
                            <Button onClick={logout}>Cerrar sesión</Button>
                        </div>
                    )}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout