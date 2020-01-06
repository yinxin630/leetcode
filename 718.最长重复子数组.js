/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 * 
 * 1. 子数组要求是连续的
 * 2. dp 解法, 如果当前字符相同, 则当前值 = 上一位的值 + 1
 * 3. 反之则当前值为 0
 * 4. 取最大值
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    const dp = [];
    let result = 0;
    for (let i = 0; i <= A.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= B.length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
                continue;
            }

            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = 0;
            }
            result = Math.max(result, dp[i][j]);
        }
    }

    return result;
};
// @lc code=end

