export const filterDate = (date, filter) => {
    const startDate = new Date(date).getTime();
    const minDate = filter.from ? new Date(filter.from).getTime() : new Date("1970, 1, 1").getTime();
    const maxDate = filter.to ? new Date(filter.to).getTime() : new Date().getTime();

    if (startDate >= minDate && startDate <= maxDate) {
        return true;
    }
    return false;
}