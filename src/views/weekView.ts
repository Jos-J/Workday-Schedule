import { generateDatesForWeek, todayDate, compareDates } from "../utils/dates";

export function renderWeekView(
    onDateClick: (date: Date) => void,
    calendarContainer: Element,
    currentDate: Date,
): void {
    const calendarDates = generateDatesForWeek(currentDate);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    calendarDates.forEach((date) =>  {
        const dayName = weekdays[date.getDay()];
        const dayElement = document.createElement("div")
        dayElement.classList.add("week-date")
        dayElement.textContent = `${dayName} ${date.getDate()}`;
        if (compareDates(date, todayDate())) {
            dayElement.classList.add("today");
        }
        if (compareDates(date, currentDate)) {
            dayElement.classList.add("selected-day")
        }
        dayElement.addEventListener("click", () => {
            onDateClick(date);
        });

        calendarContainer.appendChild(dayElement)
    })
}