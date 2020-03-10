/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    const result = [];
    let cur = [];
    let sum = 0;
    for (let i = 1; i < target; i++) {
        cur.push(i);
        sum += i;
        while (sum > target) {
            sum -= cur.shift();
        }
        if (sum === target) {
            result.push(cur.slice(0));
        }
    }
    return result
};