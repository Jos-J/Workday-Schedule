
import type { SchedulerState, CalendarView } from "./types/calendar";
import { addDays, addMonths, addWeeks, formatDate, subtractDays, subtractMonths, subtractWeeks, todayDate } from "./utils/dates";


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



function goToPrevious() {
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

function goToNext() {
    if (schedulerState.currentView === "day") {
        schedulerState.currentDate = addDays(schedulerState.currentDate, 1);
    } else if (schedulerState.currentView === "week") {
        schedulerState.currentDate = addWeeks(schedulerState.currentDate, 1)
    } else if (schedulerState.currentView === "month") {
        schedulerState.currentDate = addMonths(schedulerState.currentDate, 1)
    } updateCalendarTitle()
}
function updateCalendarTitle(): void {
    const calendarTitle = document.querySelector("#calenderTitle");
    if (calendarTitle) {
        calendarTitle.textContent = formatDate(schedulerState.currentDate)
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