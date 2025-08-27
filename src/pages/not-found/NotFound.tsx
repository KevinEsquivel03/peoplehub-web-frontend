import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Página no encontrada</h2>
      <p className={styles.description}>
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>
      <Link to="/" className={styles.homeLink}>
        Volver al inicio
      </Link>
    </div>
  </div>
);

export default NotFound;
