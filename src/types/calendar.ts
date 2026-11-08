export type CalendarView = "day" | "week" | "month";

export type CalendarEvent = {
    ID: number;
    title: string;
    customerName: string;
    Barber: string;
    date: Date;
    startTime: Time;
    endTime: Time;
    status: EventStatus;
    description?: string;
    location?: string;
    service: string;
};
export type Time = {
    hour: number;
    minute: number;
}

export type EventStatus = "scheduled" | "started" | "completed" |"cancelled";

export type SchedulerState = {
    currentView: CalendarView;
    currentDate: Date;
    events: CalendarEvent[];
};