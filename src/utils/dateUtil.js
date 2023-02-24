exports.calculateNights = (startDate, endDate) => {
    let checkInDate = new Date(startDate);
    let checkOutDate = new Date(endDate);
    let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    return Math.round(Math.abs((checkInDate - checkOutDate) / oneDay));
}