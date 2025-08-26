import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./ClassicMode.module.css";
const ClassicMode = ({ people, date, group }) => {
  const [attendance, setAttendance] = useState({});
  console.log("Asistencia:", date);
  console.log("Grupo:", group);
  const handleAttendanceChange = (personId, isPresent) => {
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
  return _jsxs("div", {
    className: styles.container,
    children: [
      _jsxs("div", {
        className: styles.header,
        children: [
          _jsx("h3", { children: "Modo Cl\u00E1sico - Lista Completa" }),
          _jsx("p", {
            children: "Selecciona \u2705 para presente o \u274C para ausente",
          }),
        ],
      }),
      _jsxs("div", {
        className: styles.stats,
        children: [
          _jsxs("span", {
            className: styles.statPresent,
            children: ["Presentes: ", presentCount],
          }),
          _jsxs("span", {
            className: styles.statAbsent,
            children: ["Ausentes: ", absentCount],
          }),
          _jsxs("span", {
            className: styles.statTotal,
            children: ["Total: ", people.length],
          }),
        ],
      }),
      _jsx("div", {
        className: styles.list,
        children: people.map((person) =>
          _jsxs(
            "div",
            {
              className: styles.person,
              children: [
                _jsx("span", { className: styles.name, children: person.name }),
                _jsxs("div", {
                  className: styles.buttons,
                  children: [
                    _jsx("button", {
                      className: `${styles.button} ${styles.presentButton} ${attendance[person.id] === true ? styles.activePresent : ""}`,
                      onClick: () => handleAttendanceChange(person.id, true),
                      children: "\u2705 Presente",
                    }),
                    _jsx("button", {
                      className: `${styles.button} ${styles.absentButton} ${attendance[person.id] === false ? styles.activeAbsent : ""}`,
                      onClick: () => handleAttendanceChange(person.id, false),
                      children: "\u274C Ausente",
                    }),
                  ],
                }),
              ],
            },
            person.id,
          ),
        ),
      }),
      _jsx("button", {
        className: styles.submitButton,
        onClick: handleSubmit,
        children: "\uD83D\uDCBE Guardar Lista Completa",
      }),
    ],
  });
};
export default ClassicMode;
