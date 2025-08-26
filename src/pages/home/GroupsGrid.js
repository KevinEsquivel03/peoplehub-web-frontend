import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./GroupsGrid.module.css";
import { FaSort, FaPlus } from "react-icons/fa";
const GroupsGrid = () => {
  const groups = [
    { id: 1, name: "Familia" },
    { id: 2, name: "Trabajo" },
    { id: 3, name: "Amigos" },
    { id: 4, name: "Universidad" },
    { id: 5, name: "Deportes" },
    { id: 6, name: "Vecinos" },
  ];
  return _jsxs("div", {
    className: styles.container,
    children: [
      _jsxs("div", {
        className: styles.header,
        children: [
          _jsx("div", { children: _jsx("h3", { children: "Groups" }) }),
          _jsxs("div", {
            className: styles.actions,
            children: [
              _jsx("div", { children: _jsx(FaSort, {}) }),
              _jsx("div", { children: _jsx(FaPlus, {}) }),
            ],
          }),
        ],
      }),
      _jsx("div", {
        className: styles.gridContainer,
        children: _jsx("div", {
          className: styles.grid,
          children: groups.map((group) =>
            _jsx(
              "div",
              {
                className: styles.card,
                children: _jsx("h3", {
                  className: styles.groupName,
                  children: group.name,
                }),
              },
              group.id,
            ),
          ),
        }),
      }),
    ],
  });
};
export default GroupsGrid;
