/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = new Map();
    for (const n of arr) {
        map.set(n, (map.get(n) || 0) + 1);
    }
    let result = -1;
    for (const k of map.keys()) {
        if (map.get(k) === k) {
            result = Math.max(result, k);
        }
    }
    return result;
};
