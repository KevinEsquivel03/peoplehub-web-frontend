import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return _jsxs("div", {
    className: styles.navbar,
    children: [
      _jsxs("div", {
        className: styles.navbar__greeting,
        children: [
          _jsx("h1", {
            className: styles.navbar__title,
            children: "Hi, Amanda!",
          }),
          _jsx("p", {
            className: styles.navbar__subtitle,
            children: "Let\u2018s take a look at your activity today",
          }),
        ],
      }),
      _jsxs("div", {
        className: styles.navbar__actions,
        children: [
          _jsxs("div", {
            className: styles.navbar__search,
            children: [
              _jsx(FaSearch, { className: styles.navbar__searchIcon }),
              _jsx("input", {
                type: "text",
                placeholder: "Search for health data",
                className: styles.navbar__searchInput,
              }),
            ],
          }),
          _jsx("button", {
            className: `${styles.navbar__themeToggle} ${isDarkMode ? styles["navbar__themeToggle--dark"] : ""}`,
            onClick: toggleDarkMode,
            children: isDarkMode ? _jsx(FaSun, {}) : _jsx(FaMoon, {}),
          }),
        ],
      }),
    ],
  });
};
export default Navbar;
