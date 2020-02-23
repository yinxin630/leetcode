/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    function getNear(n) {
        const t = Math.floor(Math.sqrt(n));

        if (n % t === 0) {
            return [t, n / t];
        }

        let upper = 0;
        if (Math.abs(num - t * t) < Math.abs(num - (t + 1) * (t + 1))) {
            upper = t;
        } else {
            upper = t + 1;
        }
        while (upper) {
            if (n % upper === 0) {
                return [upper, n / upper];
            }
            upper--;
        }
    }

    const a = getNear(num + 1);
    const b = getNear(num + 2);

    if (Math.abs(a[0] - a[1]) < Math.abs(b[0] - b[1])) {
        return a;
    } else {
        return b;
    }
};
