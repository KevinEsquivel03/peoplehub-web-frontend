import styles from "./HomePage.module.css";
import GroupsGrid from "./GroupsGrid";
import HomeCalendar from "./HomeCalendar";

const HomePage = () => {
  const groups = [
    { id: 1, name: "Familia" },
    { id: 2, name: "Trabajo" },
    { id: 3, name: "Amigos" },
    { id: 4, name: "Universidad" },
    { id: 5, name: "Deportes" },
    { id: 6, name: "Vecinos" },
  ];

  console.log(groups);

  return (
    <div className={styles.container}>
      <div className={styles.firstGrid}>
        <GroupsGrid />
      </div>

      <div>
        <h1 className={styles.secondGrid}>
          <HomeCalendar />
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
