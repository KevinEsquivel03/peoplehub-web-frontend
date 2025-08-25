import { useState } from "react";
import styles from "./QuickMode.module.css";

interface Person {
  id: string;
  name: string;
  present: boolean | null;
}

interface QuickModeProps {
  people: Person[];
  date: Date;
  group: string;
}

const QuickMode = ({ people, date, group }: QuickModeProps) => {
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});
  const [selectAll, setSelectAll] = useState<boolean | null>(null);

  console.log("Asistencia:", date);
  console.log("Grupo:", group);
  console.log("Todos:", selectAll);

  const handleToggleAll = (isPresent: boolean) => {
    const newAttendance: Record<string, boolean> = {};
    people.forEach((person) => {
      newAttendance[person.id] = isPresent;
    });
    setAttendance(newAttendance);
    setSelectAll(isPresent);
  };

  const handleTogglePerson = (personId: string, isPresent: boolean) => {
    setAttendance((prev) => ({
      ...prev,
      [personId]: isPresent,
    }));
  };

  const handleSubmit = () => {
    console.log("Asistencia guardada:", attendance);
    alert("Lista guardada exitosamente");
  };

  const presentCount = Object.values(attendance).filter(
    (status) => status === true,
  ).length;
  const absentCount = Object.values(attendance).filter(
    (status) => status === false,
  ).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Modo Rápido - Selección Masiva</h3>
        <p>Marca rápidamente a todos o individualmente</p>
      </div>

      <div className={styles.bulkActions}>
        <button
          className={`${styles.bulkButton} ${styles.presentAll}`}
          onClick={() => handleToggleAll(true)}
        >
          ✅ Marcar Todos Presentes
        </button>
        <button
          className={`${styles.bulkButton} ${styles.absentAll}`}
          onClick={() => handleToggleAll(false)}
        >
          ❌ Marcar Todos Ausentes
        </button>
      </div>

      <div className={styles.stats}>
        <span className={styles.statPresent}>Presentes: {presentCount}</span>
        <span className={styles.statAbsent}>Ausentes: {absentCount}</span>
        <span className={styles.statTotal}>Total: {people.length}</span>
      </div>

      <div className={styles.grid}>
        {people.map((person) => (
          <div key={person.id} className={styles.personCard}>
            <span className={styles.personName}>{person.name}</span>
            <div className={styles.toggleButtons}>
              <button
                className={`${styles.toggleButton} ${attendance[person.id] === true ? styles.activePresent : ""}`}
                onClick={() => handleTogglePerson(person.id, true)}
              >
                ✅
              </button>
              <button
                className={`${styles.toggleButton} ${attendance[person.id] === false ? styles.activeAbsent : ""}`}
                onClick={() => handleTogglePerson(person.id, false)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.submitButton} onClick={handleSubmit}>
        💾 Guardar Lista Rápida
      </button>
    </div>
  );
};

export default QuickMode;
