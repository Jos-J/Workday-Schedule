import type { CalendarEvent } from "../types/calendar"

export function renderDayView(
   onDateClick: (date: Date) => void,
   calendarContainer: Element,
   currentDate: Date,
   events: CalendarEvent[]
): void {
   
   const dayEvents = events.filter((event) => {
      return (
      event.date.getFullYear() === currentDate.getFullYear() &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getDate() === currentDate.getDate()
      );
   });

    console.log("Day View Events:", dayEvents);


    dayEvents.forEach((event) => {
      console.log("appointments", event.startTime.hour, event.startTime.minute, event.endTime.hour, event.endTime.minute);
    });


   const today = new Date()

   const isToday =
      today.getFullYear() === currentDate.getFullYear() &&
      today.getMonth() === currentDate.getMonth() &&
      today.getDate() === currentDate.getDate()



   const dateHeading = document.createElement("h2")
   dateHeading.textContent = currentDate.toDateString()
   calendarContainer.appendChild(dateHeading)
   if (isToday) {
      dateHeading.classList.add("today")
   }

   //initalization, condition, increment
   for (let hour = 0; hour <= 23; ++hour) {
      const timeSlot = document.createElement("div");
      timeSlot.classList.add("time-slot")


      const formattedHour = String(hour).padStart(2, "0");
      timeSlot.textContent = `${formattedHour}:00`;

      const timeRow = document.createElement("div")
      timeRow.classList.add("time-row");

      const appointmentArea = document.createElement("div");
      appointmentArea.classList.add("appointment-slot");


      timeRow.appendChild(timeSlot);
      timeRow.appendChild(appointmentArea);
      calendarContainer.appendChild(timeRow);
   }
}
