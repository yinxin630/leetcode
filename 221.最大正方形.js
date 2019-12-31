/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 * 
 * 1. 动态规划, dp[i][j] 表示以 dp[i][j] 作为右下角块的正方形边长
 * 2. 方程: dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
 *    1. 方块 dp[i][j] 需要其 左方、上方、左上方 方块存在才能构成正方形
 *    2. 如果 左方、上方、左上方 方块也都构成了 2 * 2 的正方形， 则当前方块加入后能构成 3 * 3 的正方形
 *    3. 所以要取 左方、上方、左上方 构成方块的最小值
 * 3. 取 dp 最大值, 求平方得到面积, 即答案
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const dp = [];
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        dp[i] = [];
        for (let j = 0; j < matrix[0].length; j++) {
            dp[i][j] = +matrix[i][j];
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (!(i === 0 || j === 0 || dp[i][j] === 0)) {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            }
            result = Math.max(result, dp[i][j]);
        }
    }

    return result ** 2;
};
// @lc code=end

