/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
    let result = 0;
    for (const c of coins) {
        result += Math.ceil(c / 2);
    }
    return result;
};