/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    const dp = [];
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        const a = dp[i - 3] || 0;
        const b = dp[i - 2] || 0;
        dp[i] = Math.max(a, b) + nums[i];
        result = Math.max(result, dp[i]);
    }
    return result;
};