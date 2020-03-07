/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const a = new Date(date1);
    const b = new Date(date2);
    return Math.abs((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
};
