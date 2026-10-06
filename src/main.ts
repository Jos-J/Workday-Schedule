import type { SchedulerState, CalendarView } from "./types/calendar";
import { todayDate } from "./utils/dates";


const schedulerState: SchedulerState = {
    currentDate: todayDate(),
    currentView: "week",
    events: []
}

// schedulerState.currentDate = addWeeks(schedulerState.currentDate, 1);

function changeCurrentView(
    view: CalendarView
) {
    schedulerState.currentView = view
}