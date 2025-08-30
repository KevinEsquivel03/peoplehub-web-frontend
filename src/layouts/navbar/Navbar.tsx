import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { useTheme } from "../../features/auth/hooks/useTheme";
import { useAuth } from "../../features/auth/hooks/useAuth";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__greeting}>
        <h1 className={styles.navbar__title}>
          Hi, {user?.displayName || "there!"}
        </h1>
        <p className={styles.navbar__subtitle}>
          Let&lsquo;s take a look at your activity today
        </p>
      </div>

      <div className={styles.navbar__actions}>
        <div className={styles.navbar__search}>
          <FaSearch className={styles.navbar__searchIcon} />
          <input
            type="text"
            placeholder="Search for health data"
            className={styles.navbar__searchInput}
          />
        </div>

        <button
          className={`${styles.navbar__themeToggle} ${isDark ? styles["navbar__themeToggle--dark"] : ""}`}
          onClick={toggleTheme}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
