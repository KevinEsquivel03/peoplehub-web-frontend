import { useAuth } from '../../features/auth/hooks/useAuth'

const HomePage = () => {
    const { user } = useAuth()

    return (
        <div className="home-page">
            <h1>Bienvenido a la aplicación</h1>
            {user && (
                <div>
                    <p>Nombre: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    )
}

export default HomePage