/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 * 
 * 1. 对于每一行, 存储当前列的最大高度, 得出一个柱状图
 * 2. 对每一行的柱状图应用题目 84 的解法, 计算最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let dp = [];
    function getMaxArea() {
        let max = 0;
        const stack = [-1];
        const top = () => stack[stack.length - 1];
        for (let i = 0; i < dp.length; i++) {
            while (top() !== -1 && dp[i] <= dp[top()]) {
                const j = stack.pop();
                max = Math.max(max, dp[j] * (i - top() - 1));
            }
            stack.push(i);
        }
        while (top() !== -1) {
            const j = stack.pop();
            max = Math.max(max, dp[j] * (dp.length - top() - 1));
        }
        return max;
    }

    let result = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            dp[j] = matrix[i][j] === '1' ? (dp[j] || 0) + 1 : 0;
        }
        result = Math.max(result, getMaxArea());
    }

    return result;
};
// @lc code=end
