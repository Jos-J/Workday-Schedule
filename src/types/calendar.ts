export type CalendarView = "day" | "week" | "month";

export type CalendarEvent = {
    id: number;
    title: string;
    customerName: string;
    Barber: string;
    date: Date;
    startTime: string;
    endTime: string;
    status: EventStatus;
    description?: string;
    location?: string;
    service: string;
};

export type EventStatus = "scheduled" | "started" | "completed" |"cancelled";

export type SchedulerState = {
    currentView: CalendarView;
    currentDate: Date;
    events: CalendarEvent[];
};