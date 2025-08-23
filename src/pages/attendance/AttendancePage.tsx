// pages/attendance/AttendancePage.tsx
import { useState } from 'react';
import ClassicMode from './modes/ClassicMode.tsx';
import SwipeMode from './modes/SwipeMode.tsx';
import QuickMode from './modes/QuickMode.tsx';
import styles from './AttendancePage.module.css';

// Tipo para los modos de pasar lista
type AttendanceMode = 'classic' | 'swipe' | 'quick' | 'group';

const AttendancePage = () => {
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedMode, setSelectedMode] = useState<AttendanceMode>('classic');
    const [date, setDate] = useState(new Date());

    // Datos de ejemplo - reemplazar con tus datos reales
    const groups = [
        { id: 'group1', name: 'Grupo de Mañana' },
        { id: 'group2', name: 'Grupo de Tarde' },
        { id: 'group3', name: 'Grupo Avanzado' },
    ];

    const people = selectedGroup ? [
        { id: '1', name: 'Juan Pérez', present: null },
        { id: '2', name: 'María García', present: null },
        { id: '3', name: 'Carlos López', present: null },
        { id: '4', name: 'Ana Martínez', present: null },
    ] : [];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Pasar Lista</h1>

            {/* Selector de Grupo */}
            <div className={styles.section}>
                <label className={styles.label}>Seleccionar Grupo:</label>
                <select
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    className={styles.select}
                >
                    <option value="">Selecciona un grupo</option>
                    {groups.map(group => (
                        <option key={group.id} value={group.id}>
                            {group.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Selector de Fecha */}
            <div className={styles.section}>
                <label className={styles.label}>Fecha:</label>
                <input
                    type="date"
                    value={date.toISOString().split('T')[0]}
                    onChange={(e) => setDate(new Date(e.target.value))}
                    className={styles.dateInput}
                />
            </div>

            {/* Selector de Modo */}
            {selectedGroup && (
                <div className={styles.section}>
                    <h2 className={styles.subtitle}>Modo de Pasar Lista</h2>
                    <div className={styles.modeSelector}>
                        <button
                            className={`${styles.modeButton} ${selectedMode === 'classic' ? styles.active : ''}`}
                            onClick={() => setSelectedMode('classic')}
                        >
                            📋 Clásico
                        </button>
                        <button
                            className={`${styles.modeButton} ${selectedMode === 'swipe' ? styles.active : ''}`}
                            onClick={() => setSelectedMode('swipe')}
                        >
                            💅 Swipe
                        </button>
                        <button
                            className={`${styles.modeButton} ${selectedMode === 'quick' ? styles.active : ''}`}
                            onClick={() => setSelectedMode('quick')}
                        >
                            ⚡ Rápido
                        </button>
                        <button
                            className={`${styles.modeButton} ${selectedMode === 'group' ? styles.active : ''}`}
                            onClick={() => setSelectedMode('group')}
                        >
                            👥 Por Grupos
                        </button>
                    </div>
                </div>
            )}

            {/* Renderizar el modo seleccionado */}
            {selectedGroup && (
                <div className={styles.modeContainer}>
                    {selectedMode === 'classic' && (
                        <ClassicMode
                            people={people}
                            date={date}
                            group={selectedGroup}
                        />
                    )}
                    {selectedMode === 'swipe' && (
                        <SwipeMode
                            people={people}
                            date={date}
                            group={selectedGroup}
                        />
                    )}
                    {selectedMode === 'quick' && (
                        <QuickMode
                            people={people}
                            date={date}
                            group={selectedGroup}
                        />
                    )}
                    {selectedMode === 'group' && (
                        <div className={styles.comingSoon}>
                            <h3>Modo Por Grupos</h3>
                            <p>Próximamente: Pasar lista por subgrupos o equipos</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AttendancePage;