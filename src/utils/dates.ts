export function todayDate(): Date {
    const now =   new Date();
    return now
}

export function addDays(
    currentDate:Date,
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

