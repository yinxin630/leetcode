/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const dp = [];
    for (let i = 0; i < grid.length; i++) {
        dp[i] = [];
        for (let j = 0; j < grid[0].length; j++) {
            const min = Math.min(
                (dp[i - 1] && dp[i - 1][j]) === undefined ? Number.MAX_SAFE_INTEGER : (dp[i - 1] && dp[i - 1][j]), 
                dp[i][j - 1] === undefined ? Number.MAX_SAFE_INTEGER : dp[i][j - 1]
            );
            dp[i][j] = (min === Number.MAX_SAFE_INTEGER ? 0 : min) + grid[i][j];
        }
    }
    return dp[grid.length - 1][grid[0].length - 1];
};
// @lc code=end
