//import { useAuth } from '../../features/auth/hooks/useAuth'
import styles from './HomePage.module.css';

const HomePage = () => {
    //const { user } = useAuth()

    const groups = [
    { id: 1, name: 'Familia' },
    { id: 2, name: 'Trabajo' },
    { id: 3, name: 'Amigos' },
    { id: 4, name: 'Universidad' },
    { id: 5, name: 'Deportes' },
    { id: 6, name: 'Vecinos' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {groups.map((group) => (
          <div key={group.id} className={styles.card}>
            <h3 className={styles.groupName}>{group.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage