/**
 * 1. 直接转字符串, 判断是否有0
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for (let i = 1; i < n; i++) {
        let j = n - i;

        if (i.toString().includes('0') || j.toString().includes(0)) {
            continue;
        }
        return [i, j];
    }
};