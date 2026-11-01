import { generateDatesForWeek, todayDate, compareDates } from "../utils/dates";

export function renderWeekView(
    onDateClick: (date: Date) => void,
    calendarContainer: Element,
    currentDate: Date,
    onSlotClick: (date:Date, hour:number) => void
): void { 
     
    const calendarDates = generateDatesForWeek(currentDate);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const weekHeader = document.createElement("div")
    weekHeader.classList.add("week-header")

    const emptyCell = document.createElement("div")
    weekHeader.appendChild(emptyCell);

    calendarDates.forEach((date) => {
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
        weekHeader.appendChild(dayElement);
    });
    calendarContainer.appendChild(weekHeader);


    for (let hour = 0; hour <= 23; ++hour) {
        const timeRow = document.createElement("div")
        timeRow.classList.add("time-row")

        const timeSlot = document.createElement("div")
        timeSlot.classList.add("time-slot")

        const formattedHour = String(hour).padStart(2, "0");
        // template literal interpolation.
        timeSlot.textContent = `${formattedHour}:00`;
        timeRow.appendChild(timeSlot)

        for (let day = 0; day < 7; ++day) {
            const slotDate = calendarDates[day]
            const appointmentArea = document.createElement("div")
            appointmentArea.classList.add("appointment-slot")
            timeRow.appendChild(appointmentArea);
            appointmentArea.addEventListener("click", () => {
                onSlotClick(slotDate, hour)
                
            })
            
        }
        calendarContainer.appendChild(timeRow)

    }
}