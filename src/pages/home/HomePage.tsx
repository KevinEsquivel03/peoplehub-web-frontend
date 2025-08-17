//import { useAuth } from '../../features/auth/hooks/useAuth'
import styles from './HomePage.module.css';
import GroupsGrid from './GroupsGrid';

const HomePage = () => {
    //const { user } = useAuth()

  return (
    <div className={styles.container}>

      <div className={styles.firstGrid}>
        <GroupsGrid />
      </div>

      <div>
        <h1 className={styles.secondGrid}>calendar</h1>
      </div>
      
    </div>
  );
}

export default HomePage