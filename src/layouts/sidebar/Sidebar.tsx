import { 
  FaUsers, 
  FaSearch, 
  FaBookmark, 
  FaFolder, 
  FaSync, 
  FaCog,
  FaUser 
} from 'react-icons/fa';
import styles from './Sidebar.module.css';
import { useNavigate, useLocation } from 'react-router-dom'; 

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: <FaUsers />, label: 'Grupos', path: '/' },
    { icon: <FaSearch />, label: 'Buscar', path: '/search'  },
    { icon: <FaBookmark />, label: 'Guardados', path: '/saved'  },
    { icon: <FaFolder />, label: 'Archivos', path: '/files'  },
    { icon: <FaSync />, label: 'Sincronizar', path: '/sync'  },
    { icon: <FaCog />, label: 'Configuración', path: '/config'  }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.sidebar}>
      {/* Logo/Brand */}
      <div className={styles.sidebar__brand}>
        <div className={styles.sidebar__logo}>
          <FaUsers />
        </div>
        <span className={styles.sidebar__brandText}>PeopleHub</span>
      </div>

      {/* Menu Items */}
      <nav className={styles.sidebar__nav}>
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className={`${styles.sidebar__item} ${
              location.pathname === item.path ? styles['sidebar__item--active'] : ''
            }`}
            onClick={() => handleNavigation(item.path)}
            style={{ cursor: 'pointer' }} 
          >
            <div className={styles.sidebar__icon}>
              {item.icon}
            </div>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className={styles.sidebar__user}>
        <div className={styles.sidebar__userAvatar}>
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;