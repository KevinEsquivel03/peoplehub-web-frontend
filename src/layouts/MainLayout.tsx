import { Outlet } from 'react-router-dom'
import styles from './MainLayuot.module.css';
//import { useAuth } from '../features/auth/hooks/useAuth'
//import { Button } from '../shared/ui/Button'
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';

const MainLayout = () => {
    //const { logout, user } = useAuth()

    return (
        <div className={styles.Layout}>
            <div className={styles.layout__sidebar}>
                <Sidebar />
            </div>
            <div className={styles.layout__main}>
                <div className={styles.layout__navbar}>
                    <Navbar />
                </div>
                <div className={styles.layout__content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout

/*
<div className="main-layout">
            <header>
                <nav>
                    <h1>Mi Aplicación</h1>
                    
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
*/