import { useState } from 'react';
import styles from './SwipeMode.module.css';

interface Person {
    id: string;
    name: string;
    present: boolean | null;
}

interface SwipeModeProps {
    people: Person[];
    date: Date;
    group: string;
}

const SwipeMode = ({ people, date, group }: SwipeModeProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [attendance, setAttendance] = useState<Record<string, boolean>>({});

    console.log('Asistencia:', date);
    console.log('Grupo:', group);

    const currentPerson = people[currentIndex];

    const handleSwipe = (isPresent: boolean) => {
        if (!currentPerson) return;

        setAttendance(prev => ({
            ...prev,
            [currentPerson.id]: isPresent
        }));

        if (currentIndex < people.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            alert('¡Lista completada!');
        }
    };

    const handleSubmit = () => {
        console.log('Asistencia guardada:', attendance);
        alert('Lista guardada exitosamente');
    };

    const progress = ((currentIndex + 1) / people.length) * 100;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Modo Swipe - Como Tinder</h3>
                <p>Desliza o haz clic para marcar asistencia</p>
            </div>

            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${progress}%` }}
                ></div>
                <span className={styles.progressText}>
                    {currentIndex + 1} de {people.length}
                </span>
            </div>

            {currentPerson ? (
                <div className={styles.card}>
                    <div className={styles.personCard}>
                        <h2 className={styles.personName}>{currentPerson.name}</h2>
                        <p className={styles.personInfo}>¿Está presente hoy?</p>
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={styles.absentButton}
                            onClick={() => handleSwipe(false)}
                        >
                            ❌ Ausente
                        </button>
                        <button
                            className={styles.presentButton}
                            onClick={() => handleSwipe(true)}
                        >
                            ✅ Presente
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.completed}>
                    <h3>¡Lista Completada!</h3>
                    <p>Has terminado de pasar lista a todos</p>
                    <button className={styles.submitButton} onClick={handleSubmit}>
                        💾 Guardar Resultados
                    </button>
                </div>
            )}

            <div className={styles.quickActions}>
                <button
                    className={styles.skipButton}
                    onClick={() => setCurrentIndex(prev => Math.min(prev + 1, people.length - 1))}
                >
                    ⏭️ Saltar
                </button>
                <button
                    className={styles.backButton}
                    onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
                >
                    ↩️ Volver
                </button>
            </div>
        </div>
    );
};

export default SwipeMode;