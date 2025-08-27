import {
  FaUsers,
  FaSearch,
  FaBookmark,
  FaFolder,
  FaSync,
  FaCog,
  FaUser,
} from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import styles from "./Sidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const menuItems = [
    { icon: <FaUsers size={23} />, label: "Grupos", path: "/" },
    //{ icon: <FaSearch />, label: "Buscar", path: "/search" },
    //{ icon: <FaBookmark size={20}/>, label: "Guardados", path: "/saved" },
    { icon: <FaFolder size={20} />, label: "Archivos", path: "/files" },
    //{ icon: <FaSync />, label: "Sincronizar", path: "/sync" },
    { icon: <FaCog size={20} />, label: "Configuración", path: "/config" },
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
        <button className={styles.sidebar__item}>
          <FaUser size={20} />
        </button>
        <br />
        <button className={styles.sidebar__item} onClick={logout}>
          <RiLogoutBoxFill size={20} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
