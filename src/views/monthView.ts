import { datesForGrid, compareDates, todayDate } from "../utils/dates";

export function renderMonthView(
    onDateClick: (date: Date) => void,
    calendarContainer: Element,
    currentDate: Date,
): void {
    const calendarDates = datesForGrid(currentDate);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    weekdays.forEach((day) => {

        const dayHeader = document.createElement("div")
        dayHeader.classList.add("week-day")
        dayHeader.textContent = (day)
        calendarContainer.appendChild(dayHeader)

    });

    calendarDates.forEach((date) => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar-day")
        dayElement.textContent = String(date.getDate())

        if (compareDates(date, todayDate())) {
            dayElement.classList.add("today");
        }
        if (compareDates(date, currentDate)) {
            dayElement.classList.add("selected-day")
        }

        if (date.getMonth() !== currentDate.getMonth()) {
            dayElement.classList.add("outside-month")
        }
        dayElement.addEventListener("click",() => {
            onDateClick(date);
        });

        calendarContainer.appendChild(dayElement)
    });
}
