import { useState } from 'react';
import styles from './ClassicMode.module.css';

interface Person {
    id: string;
    name: string;
    present: boolean | null;
}

interface ClassicModeProps {
    people: Person[];
    date: Date;
    group: string;
}

const ClassicMode = ({ people, date, group }: ClassicModeProps) => {
    const [attendance, setAttendance] = useState<Record<string, boolean>>({});

    console.log('Asistencia:', date);
    console.log('Grupo:', group);

    const handleAttendanceChange = (personId: string, isPresent: boolean) => {
        setAttendance(prev => ({
            ...prev,
            [personId]: isPresent
        }));
    };

    const handleSubmit = () => {
        console.log('Asistencia guardada:', attendance);
        alert('Lista guardada exitosamente');
    };

    const presentCount = Object.values(attendance).filter(status => status === true).length;
    const absentCount = Object.values(attendance).filter(status => status === false).length;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Modo Clásico - Lista Completa</h3>
                <p>Selecciona ✅ para presente o ❌ para ausente</p>
            </div>

            <div className={styles.stats}>
                <span className={styles.statPresent}>Presentes: {presentCount}</span>
                <span className={styles.statAbsent}>Ausentes: {absentCount}</span>
                <span className={styles.statTotal}>Total: {people.length}</span>
            </div>

            <div className={styles.list}>
                {people.map(person => (
                    <div key={person.id} className={styles.person}>
                        <span className={styles.name}>{person.name}</span>
                        <div className={styles.buttons}>
                            <button
                                className={`${styles.button} ${styles.presentButton} ${attendance[person.id] === true ? styles.activePresent : ''}`}
                                onClick={() => handleAttendanceChange(person.id, true)}
                            >
                                ✅ Presente
                            </button>
                            <button
                                className={`${styles.button} ${styles.absentButton} ${attendance[person.id] === false ? styles.activeAbsent : ''}`}
                                onClick={() => handleAttendanceChange(person.id, false)}
                            >
                                ❌ Ausente
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className={styles.submitButton} onClick={handleSubmit}>
                💾 Guardar Lista Completa
            </button>
        </div>
    );
};

export default ClassicMode;