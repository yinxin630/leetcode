/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = nums[0] || 0;
    let dp = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            dp[i] = nums[i];
        } else {
            dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        }
        result = Math.max(result, dp[i]);
    }

    return result;
};
// @lc code=end

