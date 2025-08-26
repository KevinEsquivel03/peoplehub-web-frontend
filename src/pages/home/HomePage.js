import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./HomePage.module.css";
import GroupsGrid from "./GroupsGrid";
import HomeCalendar from "./HomeCalendar";
const HomePage = () => {
  const groups = [
    { id: 1, name: "Familia" },
    { id: 2, name: "Trabajo" },
    { id: 3, name: "Amigos" },
    { id: 4, name: "Universidad" },
    { id: 5, name: "Deportes" },
    { id: 6, name: "Vecinos" },
  ];
  console.log(groups);
  return _jsxs("div", {
    className: styles.container,
    children: [
      _jsx("div", {
        className: styles.firstGrid,
        children: _jsx(GroupsGrid, {}),
      }),
      _jsx("div", {
        children: _jsx("h1", {
          className: styles.secondGrid,
          children: _jsx(HomeCalendar, {}),
        }),
      }),
    ],
  });
};
export default HomePage;
