import styles from "./GroupsGrid.module.css";
import { FaSort, FaPlus } from "react-icons/fa";

const GroupsGrid = () => {
  const groups = [
    { id: 1, name: "Familia" },
    { id: 2, name: "Trabajo" },
    { id: 3, name: "Amigos" },
    { id: 4, name: "Universidad" },
    { id: 5, name: "Deportes" },
    { id: 6, name: "Vecinos" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h3>Groups</h3>
        </div>
        <div className={styles.actions}>
          <div>
            <FaSort />
          </div>
          <div>
            <FaPlus />
          </div>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {groups.map((group) => (
            <div key={group.id} className={styles.card}>
              <h3 className={styles.groupName}>{group.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupsGrid;
