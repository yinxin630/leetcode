/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const a = (hour % 12) * 30 + (minutes / 2);
    const b = minutes * 6;
    const result = Math.abs(b - a);
    if (result <= 180) {
        return result;
    } else {
        if (a > 180) {
            return 360 - a + b;
        } else {
            return 360 - b + a;
        }
    }
};
