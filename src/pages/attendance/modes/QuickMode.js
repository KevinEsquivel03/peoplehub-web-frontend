import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./QuickMode.module.css";
const QuickMode = ({ people, date, group }) => {
  const [attendance, setAttendance] = useState({});
  const [selectAll, setSelectAll] = useState(null);
  console.log("Asistencia:", date);
  console.log("Grupo:", group);
  console.log("Todos:", selectAll);
  const handleToggleAll = (isPresent) => {
    const newAttendance = {};
    people.forEach((person) => {
      newAttendance[person.id] = isPresent;
    });
    setAttendance(newAttendance);
    setSelectAll(isPresent);
  };
  const handleTogglePerson = (personId, isPresent) => {
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
          _jsx("h3", { children: "Modo R\u00E1pido - Selecci\u00F3n Masiva" }),
          _jsx("p", {
            children: "Marca r\u00E1pidamente a todos o individualmente",
          }),
        ],
      }),
      _jsxs("div", {
        className: styles.bulkActions,
        children: [
          _jsx("button", {
            className: `${styles.bulkButton} ${styles.presentAll}`,
            onClick: () => handleToggleAll(true),
            children: "\u2705 Marcar Todos Presentes",
          }),
          _jsx("button", {
            className: `${styles.bulkButton} ${styles.absentAll}`,
            onClick: () => handleToggleAll(false),
            children: "\u274C Marcar Todos Ausentes",
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
        className: styles.grid,
        children: people.map((person) =>
          _jsxs(
            "div",
            {
              className: styles.personCard,
              children: [
                _jsx("span", {
                  className: styles.personName,
                  children: person.name,
                }),
                _jsxs("div", {
                  className: styles.toggleButtons,
                  children: [
                    _jsx("button", {
                      className: `${styles.toggleButton} ${attendance[person.id] === true ? styles.activePresent : ""}`,
                      onClick: () => handleTogglePerson(person.id, true),
                      children: "\u2705",
                    }),
                    _jsx("button", {
                      className: `${styles.toggleButton} ${attendance[person.id] === false ? styles.activeAbsent : ""}`,
                      onClick: () => handleTogglePerson(person.id, false),
                      children: "\u274C",
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
        children: "\uD83D\uDCBE Guardar Lista R\u00E1pida",
      }),
    ],
  });
};
export default QuickMode;
