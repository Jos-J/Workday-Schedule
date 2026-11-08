import type { CalendarEvent } from "../types/calendar";



 export const sampleEvents: CalendarEvent[] = [
    {
        ID: 1,
        title: "Hair Appointment",
        customerName: "Sara",
        Barber: "Leon",
        date: new Date(2026, 10, 7),
        startTime: {hour: 10, minute: 15},
        endTime: {hour: 11, minute: 15},
        status: "scheduled",
        description: "fade haircut",
        location: "store 009",
        service: "haircut"
    },

    {
        ID: 2,
        title: "Hair Dyeing",
        customerName: "Sara",
        Barber: "Leon",
        date: new Date(2026, 10, 7),
        startTime: {hour: 13, minute: 15},
        endTime: {hour: 14, minute: 15},
        status: "scheduled",
        description: "dyeing hair blonde - 5 bottles",
        location: "store 009",
        service: "hair dye"
    }
 ];