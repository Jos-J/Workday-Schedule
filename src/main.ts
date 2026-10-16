
import type { SchedulerState, CalendarView } from "./types/calendar";
import { addDays, addMonths, addWeeks, endOfWeek, formatDate, startOfMonth, startOfWeek, subtractDays, subtractMonths, subtractWeeks, todayDate, datesForGrid, compareDates } from "./utils/dates";


const schedulerState: SchedulerState = {
    currentDate: todayDate(),
    currentView: "month",
    events: []
}


function changeCurrentView(
    view: CalendarView
): void {
    schedulerState.currentView = view;
    updateCalendarTitle()
    renderCalendar()
}



function goToPrevious(): void {
    if (schedulerState.currentView === "day") {
        schedulerState.currentDate = subtractDays(schedulerState.currentDate, 1);
    } else if (schedulerState.currentView === "week") {
        schedulerState.currentDate = subtractWeeks(schedulerState.currentDate, 1)
    } else if (schedulerState.currentView === "month") {
        schedulerState.currentDate = subtractMonths(schedulerState.currentDate, 1)
    } updateCalendarTitle()
    renderCalendar()
}

function goToToday(): void {
    schedulerState.currentDate = todayDate()
    updateCalendarTitle()
    renderCalendar()
}

function goToNext(): void {
    if (schedulerState.currentView === "day") {
        schedulerState.currentDate = addDays(schedulerState.currentDate, 1);
    } else if (schedulerState.currentView === "week") {
        schedulerState.currentDate = addWeeks(schedulerState.currentDate, 1)
    } else if (schedulerState.currentView === "month") {
        schedulerState.currentDate = addMonths(schedulerState.currentDate, 1)
    } updateCalendarTitle()
    renderCalendar()
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

function renderCalendar(): void {
    const calendarContainer = document.querySelector("#calendar")
    if (calendarContainer) {
        calendarContainer.innerHTML = "";
        calendarContainer.classList.add("month-grid");
        if (schedulerState.currentView === "month") {
            const calendarDates = datesForGrid(schedulerState.currentDate);
            const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]
            weekdays.forEach((day) => {

                const dayHeader = document.createElement("div")
                dayHeader.classList.add("week-day")
                dayHeader.textContent = (day)
                calendarContainer.appendChild(dayHeader)

            });
            calendarDates.forEach((date) => {
                const dayElement = document.createElement("div");

                if(compareDates(date, schedulerState.currentDate)) {
                    dayElement.classList.add("selected-day")
                }

                if (compareDates(date, todayDate())) {
                    dayElement.classList.add("today");
                }

                dayElement.classList.add("calendar-day")
                dayElement.textContent = String(date.getDate())

                if (date.getMonth() !== schedulerState.currentDate.getMonth()) {
                    dayElement.classList.add("outside-month")
                }

                calendarContainer.appendChild(dayElement)
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
renderCalendar()