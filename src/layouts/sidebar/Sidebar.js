import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
  const handleNavigation = (path) => {
    navigate(path);
  };
  const menuItems = [
    { icon: _jsx(FaUsers, {}), label: "Grupos", path: "/" },
    { icon: _jsx(FaSearch, {}), label: "Buscar", path: "/search" },
    { icon: _jsx(FaBookmark, {}), label: "Guardados", path: "/saved" },
    { icon: _jsx(FaFolder, {}), label: "Archivos", path: "/files" },
    { icon: _jsx(FaSync, {}), label: "Sincronizar", path: "/sync" },
    { icon: _jsx(FaCog, {}), label: "Configuración", path: "/config" },
  ];
  return _jsxs("div", {
    className: styles.sidebar,
    children: [
      _jsxs("div", {
        className: styles.sidebar__brand,
        children: [
          _jsx("div", {
            className: styles.sidebar__logo,
            children: _jsx(FaUsers, {}),
          }),
          _jsx("span", {
            className: styles.sidebar__brandText,
            children: "PeopleHub",
          }),
        ],
      }),
      _jsx("nav", {
        className: styles.sidebar__nav,
        children: menuItems.map((item, index) =>
          _jsx(
            "button",
            {
              onClick: () => handleNavigation(item.path),
              className: `${styles.sidebar__item} ${
                location.pathname === item.path
                  ? styles["sidebar__item--active"]
                  : ""
              }`,
              "aria-label": item.label,
              style: { cursor: "pointer" },
              children: _jsx("div", {
                className: styles.sidebar__icon,
                children: item.icon,
              }),
            },
            index,
          ),
        ),
      }),
      _jsx("div", {
        className: styles.sidebar__user,
        children: _jsx("div", {
          className: styles.sidebar__userAvatar,
          children: _jsx(FaUser, {}),
        }),
      }),
    ],
  });
};
export default Sidebar;
