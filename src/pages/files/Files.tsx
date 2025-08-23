import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import type { SlotInfo, Event } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css' // ¡IMPORTANTE!

// Tipos de TypeScript
interface CalendarEvent extends Event {
  id: number
  title: string
  start: Date
  end: Date
}

const localizer = momentLocalizer(moment)

const Files: React.FC = () => {
  // Array de eventos inicial
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: 1,
      title: 'Reunión de equipo',
      start: new Date(2024, 10, 15, 10, 0), // año, mes(0-11), día, hora, minuto
      end: new Date(2024, 10, 15, 12, 0),
    },
    {
      id: 2,
      title: 'Presentación cliente',
      start: new Date(2024, 10, 20, 14, 0),
      end: new Date(2024, 10, 20, 16, 0),
    }
  ])

  // Función para crear nuevo evento
  const handleSelectSlot = (slotInfo: SlotInfo) => {
    const title = window.prompt('Nombre del evento:')
    if (title) {
      const newEvent: CalendarEvent = {
        id: events.length + 1,
        title,
        start: slotInfo.start,
        end: slotInfo.end,
      }
      setEvents([...events, newEvent])
    }
  }

  // Función para editar evento existente
  const handleSelectEvent = (event: CalendarEvent) => {
    const newTitle = window.prompt('Editar evento:', event.title)
    if (newTitle) {
      setEvents(events.map(e => 
        e.id === event.id ? { ...e, title: newTitle } : e
      ))
    }
  }

  return (
    <div style={{ height: '600px', margin: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        selectable
        popup
        views={['month', 'week', 'day']}
        defaultView="month"
      />
    </div>
  )
}

export default Files