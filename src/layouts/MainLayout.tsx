import { Outlet } from "react-router-dom";
import styles from "./MainLayuot.module.css";
import { useAuth } from "../features/auth/hooks/useAuth";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { Button } from "../shared/ui/Button";

const MainLayout = () => {
  const { logout, user } = useAuth();

  return (
    <div className={styles.Layout}>
      <div className={styles.layout__sidebar}>
        <Sidebar />
      </div>
      <div className={styles.layout__divider}>
        <div className={styles.layout__dividerLine}>
          <Button variant="secondary" onClick={logout}>
            Log out {user?.displayName}
          </Button>
        </div>
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
  );
};

export default MainLayout;
