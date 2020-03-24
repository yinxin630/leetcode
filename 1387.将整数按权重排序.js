/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const map = new Map();
    map.set(1, 0);
    function get(n) {
        if (map.has(n)) {
            return map.get(n);
        }
        const t = get(n % 2 === 0 ? n / 2 : n * 3 + 1) + 1;
        map.set(n, t);
        return t;
    }

    const arr = [];
    for (let i = lo; i <= hi; i++) {
        arr.push({
            i,
            d: get(i),
        });
    }

    arr.sort((a, b) => {
        if (a.d !== b.d) {
            return a.d - b.d;
        } else {
            return a.i - b.i;
        }
    });
    return arr[k - 1].i;
};