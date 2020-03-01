/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const copy = [...nums];
    copy.sort((a, b) => a - b);
    const map = copy.reduce((r, n, i) => {
        r[n] = r[n] === undefined ? i : r[n];
        return r;
    }, {})

    const result = [];
    for (const n of nums) {
        result.push(map[n]);
    }

    return result;
};
