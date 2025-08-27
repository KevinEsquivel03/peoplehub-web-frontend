import {
  FaUsers,
  FaSearch,
  FaBookmark,
  FaFolder,
  FaSync,
  FaCog,
  FaUser,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const menuItems = [
    { icon: <FaUsers />, label: "Grupos", path: "/" },
    { icon: <FaSearch />, label: "Buscar", path: "/search" },
    { icon: <FaBookmark />, label: "Guardados", path: "/saved" },
    { icon: <FaFolder />, label: "Archivos", path: "/files" },
    { icon: <FaSync />, label: "Sincronizar", path: "/sync" },
    { icon: <FaCog />, label: "Configuración", path: "/config" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__brand}>
        <div className={styles.sidebar__logo}>
          <FaUsers />
        </div>
        <span className={styles.sidebar__brandText}>PeopleHub</span>
      </div>

      <nav className={styles.sidebar__nav}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`${styles.sidebar__item} ${
              location.pathname === item.path
                ? styles["sidebar__item--active"]
                : ""
            }`}
            aria-label={item.label}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.sidebar__icon}>{item.icon}</div>
          </button>
        ))}
      </nav>

      <div className={styles.sidebar__user}>
        <div className={styles.sidebar__userAvatar}>
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
