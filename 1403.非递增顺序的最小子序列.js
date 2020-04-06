/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a);
    const sum = nums.reduce((r, n) => r + n);
    let t = 0;
    for (let i = 0; i < nums.length; i++) {
        t += nums[i];
        if (t > sum - t) {
            return nums.slice(0, i + 1);
        }
    }
    return nums;
};