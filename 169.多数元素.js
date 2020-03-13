/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const half = nums.length >> 1;
    for (const n of nums) {
        const count = (map.get(n) || 0) + 1;
        if (count > half) {
            return n;
        }
        map.set(n, count);
    }
    return null;
};