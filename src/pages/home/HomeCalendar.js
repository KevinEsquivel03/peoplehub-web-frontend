import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // ¡IMPORTANTE!
import Styles from "./HomeCalendar.module.css";
const localizer = momentLocalizer(moment);
const HomeCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Reunión de equipo",
      start: new Date(2024, 10, 15, 10, 0),
      end: new Date(2024, 10, 15, 12, 0),
    },
    {
      id: 2,
      title: "Presentación cliente",
      start: new Date(2024, 10, 20, 14, 0),
      end: new Date(2024, 10, 20, 16, 0),
    },
  ]);
  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt("Nombre del evento:");
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start: slotInfo.start,
        end: slotInfo.end,
      };
      setEvents([...events, newEvent]);
    }
  };
  const handleSelectEvent = (event) => {
    const newTitle = window.prompt("Editar evento:", event.title);
    if (newTitle) {
      setEvents(
        events.map((e) => (e.id === event.id ? { ...e, title: newTitle } : e)),
      );
    }
  };
  return _jsx("div", {
    className: Styles.container,
    children: _jsx(Calendar, {
      localizer: localizer,
      events: events,
      startAccessor: "start",
      endAccessor: "end",
      style: { height: "100%" },
      onSelectSlot: handleSelectSlot,
      onSelectEvent: handleSelectEvent,
      selectable: true,
      popup: true,
      views: ["month", "week", "day"],
      defaultView: "month",
    }),
  });
};
export default HomeCalendar;
