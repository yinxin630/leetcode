/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
    let result = 0;
    let max = 0;
    for (let i = 0; i < light.length; i++) {
        if (i === max) {
            result++;
        }
        max = Math.max(max, light[i]);
    }
    return result;
};