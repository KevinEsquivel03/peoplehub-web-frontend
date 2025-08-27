import styles from "./HomePage.module.css";
import GroupsGrid from "./GroupsGrid";
import HomeCalendar from "./HomeCalendar";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstGrid}>
        <GroupsGrid />
      </div>

      <div className={styles.secondGrid}>
        <h1>
          <HomeCalendar />
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
