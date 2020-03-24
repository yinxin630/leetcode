/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const key = (x, y) => x + ',' + y;
    const map = new Map();
    for (const [x, y] of reservedSeats) {
        const set = map.get(x) || new Set();
        if (y >= 2 && y <= 3) {
            set.add(key(x, 'l'));
        } else if (y >= 4 && y <= 5) {
            set.add(key(x, 'l'));
            set.add(key(x, 'm'));
        } else if (y >= 6 && y <= 7) {
            set.add(key(x, 'r'));
            set.add(key(x, 'm'));
        } else if (y >= 8 && y <= 9) {
            set.add(key(x, 'r'));
        }
        map.set(x, set);
    }
    let result = n * 2;
    for (const set of map.values()) {
        if (set.size) {
            result -= (set.size === 3) ? 2 : 1;
        }
    }
    return result;
};