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

const Sidebar = () => {
  const menuItems = [
    { icon: <FaUsers />, label: 'Grupos', active: true },
    { icon: <FaSearch />, label: 'Buscar' },
    { icon: <FaBookmark />, label: 'Guardados' },
    { icon: <FaFolder />, label: 'Archivos' },
    { icon: <FaSync />, label: 'Sincronizar' },
    { icon: <FaCog />, label: 'Configuración' }
  ];

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
            className={`${styles.sidebar__item} ${item.active ? styles['sidebar__item--active'] : ''}`}
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