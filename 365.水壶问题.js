/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if (x + y < z) {
        return false;
    } else if (x === 0 || y === 0) {
        return z === 0 || x + y === z;
    } else {
        function gcd(a, b) {
            while (a !== b) {
                const t = Math.abs(a - b);
                a = Math.min(a, b);
                b = t;
            }
            return a;
        }
        return z % gcd(x, y) === 0;
    }
};