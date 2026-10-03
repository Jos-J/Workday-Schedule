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