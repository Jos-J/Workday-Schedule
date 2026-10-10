
import type { SchedulerState, CalendarView } from "./types/calendar";
import { addDays, addMonths, addWeeks, endOfWeek, formatDate, startOfMonth, startOfWeek, subtractDays, subtractMonths, subtractWeeks, todayDate } from "./utils/dates";


const schedulerState: SchedulerState = {
    currentDate: todayDate(),
    currentView: "week",
    events: []
}


function changeCurrentView(
    view: CalendarView
): void {
    schedulerState.currentView = view;
    updateCalendarTitle()
}



function goToPrevious(): void {
    if (schedulerState.currentView === "day") {
        schedulerState.currentDate = subtractDays(schedulerState.currentDate, 1);
    } else if (schedulerState.currentView === "week") {
        schedulerState.currentDate = subtractWeeks(schedulerState.currentDate, 1)
    } else if (schedulerState.currentView === "month") {
        schedulerState.currentDate = subtractMonths(schedulerState.currentDate, 1)
    } updateCalendarTitle()
}

function goToToday(): void {
    schedulerState.currentDate = todayDate()
    updateCalendarTitle()
}

function goToNext(): void {
    if (schedulerState.currentView === "day") {
        schedulerState.currentDate = addDays(schedulerState.currentDate, 1);
    } else if (schedulerState.currentView === "week") {
        schedulerState.currentDate = addWeeks(schedulerState.currentDate, 1)
    } else if (schedulerState.currentView === "month") {
        schedulerState.currentDate = addMonths(schedulerState.currentDate, 1)
    } updateCalendarTitle()
}
function updateCalendarTitle(): void {
    const calendarTitle = document.querySelector("#calendarTitle");
    if (calendarTitle) {
        if (schedulerState.currentView === "day") {
            calendarTitle.textContent = formatDate(schedulerState.currentDate)
        } else if (schedulerState.currentView === "week") {
            const weekStart = startOfWeek(schedulerState.currentDate)
            const weekEnd = endOfWeek(schedulerState.currentDate)
            const formattedStart = formatDate(weekStart)
            const formattedEnd = formatDate(weekEnd)
            calendarTitle.textContent = `${formattedStart} - ${formattedEnd}`;
        } else if (schedulerState.currentView === "month") {
            const monthStart = startOfMonth(schedulerState.currentDate)
            calendarTitle.textContent = monthStart.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric"

            });
        }
    }
}



// button event listeners
const todayButton = document.querySelector("#todayBtn")
todayButton?.addEventListener("click", goToToday)

const previousButton = document.querySelector("#prevBtn")
previousButton?.addEventListener("click", goToPrevious)

const nextButton = document.querySelector("#nextBtn")
nextButton?.addEventListener("click", goToNext)

const viewButtons = document.querySelectorAll("[data-view]")
viewButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const selectedView = button.getAttribute("data-view")
        if (
            selectedView === "day" ||
            selectedView === "week" ||
            selectedView === "month"
        ) {
            changeCurrentView(selectedView);

        }

    });
});

updateCalendarTitle()