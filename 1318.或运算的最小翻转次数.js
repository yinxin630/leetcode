/**
 * 1. 逐位对比
 * 2. 结果相同的跳过, 无须翻转
 * 3. 结果不同时
 *    如果目标是1, 则说明 a, b 全是 0, 任一翻转一次即可
 *    如果目标是0, 则说明 a, b 任一是 1, 几个 1 就翻转几次
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let result = 0;
    while (a > 0 || b > 0 || c > 0) {
        const x = a & 1;
        const y = b & 1;
        const z = c & 1;
        if ((x | y) !== z) {
            if (z) {
                result += 1;
            } else {
                if (x) {
                    result += 1;
                }
                if (y) {
                    result += 1;
                }
            }
        }

        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return result;
};