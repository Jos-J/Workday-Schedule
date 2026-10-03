// What does this new function actually need to accomplish.

export function todayDate(): Date {
    const now = new Date();
    return now
}

export function addDays(
    currentDate: Date,
    daysToAdd: number
): Date {
    const newDate = new Date(currentDate);
    const addDate = currentDate.getDate() + daysToAdd;
    newDate.setDate(addDate);

    return newDate;
}

export function subtractDays(
    currentDate: Date,
    daysToSubtract: number
): Date {
    const newDate = new Date(currentDate);
    const subDate = currentDate.getDate() - daysToSubtract;
    newDate.setDate(subDate);

    return newDate;
}

export function addWeeks(
    currentWeek: Date,
    weeksToAdd: number
): Date {
    const newWeek = new Date(currentWeek);
    const addWeek = currentWeek.getDate() + weeksToAdd * 7;

    newWeek.setDate(addWeek);

    return newWeek;
}

export function subtractWeeks(
    currentWeek: Date,
    weeksToSubtract: number
): Date {
    const newWeek = new Date(currentWeek);
    const subWeek = currentWeek.getDate() - weeksToSubtract * 7;

    newWeek.setDate(subWeek);

    return newWeek;
}

export function addMonths(
    currentMonth: Date,
    monthsToAdd: number
): Date {
    const newMonth = new Date(currentMonth);
    const addMonth = currentMonth.getMonth() + monthsToAdd;

    newMonth.setMonth(addMonth);

    return newMonth;

}

export function subtractMonths(
    currentMonth: Date,
    monthsToSubtract: number
): Date {
    const newMonth = new Date(currentMonth);
    const subMonth = currentMonth.getMonth() - monthsToSubtract;

    newMonth.setMonth(subMonth);

    return newMonth;
}

export function startOfWeek(
    startDay: Date
): Date {
    const firstDayOfWeek = new Date(startDay);
    const firstDay = firstDayOfWeek.getDay()
    const startDate = firstDayOfWeek.getDate() - firstDay;

    firstDayOfWeek.setDate(startDate);

    return firstDayOfWeek;
}

export function endOfWeek(
    endDay: Date
): Date {
    const lastDayOfWeek = new Date(endDay);
    const lastDay = lastDayOfWeek.getDay()
    const daysUntilSaturday = 6 -lastDay;
    const endDate = lastDayOfWeek.getDate() + daysUntilSaturday;

    lastDayOfWeek.setDate(endDate);

    return lastDayOfWeek;
}

export function startOfMonth(
    startMonth: Date
): Date {
    const firstDayOfMonth = new Date(startMonth);
    firstDayOfMonth.setDate(1)

    return firstDayOfMonth;
}

export function daysInMonth(
    month: Date,
): number {
    const nextMonth = new Date(month);
    const addMonth = nextMonth.getMonth() + 1;

    nextMonth.setMonth(addMonth);
    nextMonth.setDate(0);

    return nextMonth.getDate();
}

export function compareDates(
    firstDay: Date,
    secondDay: Date
): boolean {
    return(
    firstDay.getMonth() === secondDay.getMonth() &&
    firstDay.getDate() === secondDay.getDate() &&
    firstDay.getFullYear() === secondDay.getFullYear()
    )
} 

export function formatDate(
    date: Date,
): string {
     const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",

    };

    const formatedDate = date.toLocaleDateString("en-us", options);

    return formatedDate
}

