import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

const MainLayout = () => {
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
  );
};

export default MainLayout;
