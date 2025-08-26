import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./SwipeMode.module.css";
const SwipeMode = ({ people, date, group }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attendance, setAttendance] = useState({});
  console.log("Asistencia:", date);
  console.log("Grupo:", group);
  const currentPerson = people[currentIndex];
  const handleSwipe = (isPresent) => {
    if (!currentPerson) return;
    setAttendance((prev) => ({
      ...prev,
      [currentPerson.id]: isPresent,
    }));
    if (currentIndex < people.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert("¡Lista completada!");
    }
  };
  const handleSubmit = () => {
    console.log("Asistencia guardada:", attendance);
    alert("Lista guardada exitosamente");
  };
  const progress = ((currentIndex + 1) / people.length) * 100;
  return _jsxs("div", {
    className: styles.container,
    children: [
      _jsxs("div", {
        className: styles.header,
        children: [
          _jsx("h3", { children: "Modo Swipe - Como Tinder" }),
          _jsx("p", { children: "Desliza o haz clic para marcar asistencia" }),
        ],
      }),
      _jsxs("div", {
        className: styles.progressBar,
        children: [
          _jsx("div", {
            className: styles.progressFill,
            style: { width: `${progress}%` },
          }),
          _jsxs("span", {
            className: styles.progressText,
            children: [currentIndex + 1, " de ", people.length],
          }),
        ],
      }),
      currentPerson
        ? _jsxs("div", {
            className: styles.card,
            children: [
              _jsxs("div", {
                className: styles.personCard,
                children: [
                  _jsx("h2", {
                    className: styles.personName,
                    children: currentPerson.name,
                  }),
                  _jsx("p", {
                    className: styles.personInfo,
                    children: "\u00BFEst\u00E1 presente hoy?",
                  }),
                ],
              }),
              _jsxs("div", {
                className: styles.actions,
                children: [
                  _jsx("button", {
                    className: styles.absentButton,
                    onClick: () => handleSwipe(false),
                    children: "\u274C Ausente",
                  }),
                  _jsx("button", {
                    className: styles.presentButton,
                    onClick: () => handleSwipe(true),
                    children: "\u2705 Presente",
                  }),
                ],
              }),
            ],
          })
        : _jsxs("div", {
            className: styles.completed,
            children: [
              _jsx("h3", { children: "\u00A1Lista Completada!" }),
              _jsx("p", { children: "Has terminado de pasar lista a todos" }),
              _jsx("button", {
                className: styles.submitButton,
                onClick: handleSubmit,
                children: "\uD83D\uDCBE Guardar Resultados",
              }),
            ],
          }),
      _jsxs("div", {
        className: styles.quickActions,
        children: [
          _jsx("button", {
            className: styles.skipButton,
            onClick: () =>
              setCurrentIndex((prev) => Math.min(prev + 1, people.length - 1)),
            children: "\u23ED\uFE0F Saltar",
          }),
          _jsx("button", {
            className: styles.backButton,
            onClick: () => setCurrentIndex((prev) => Math.max(prev - 1, 0)),
            children: "\u21A9\uFE0F Volver",
          }),
        ],
      }),
    ],
  });
};
export default SwipeMode;
