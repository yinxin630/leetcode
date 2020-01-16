/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 * 
 * 1. 动态规划解法, 如果当前是左括号, 则跳过, 只有右括号才能新组成匹配对
 * 2. 如果前一个是左括号, 则匹配成一对, dp[i] = dp[i - 2] + 2, 左括号前面构成的对数 + 新成的一对
 * 3. 如果前一个是右括号, 则判断前 dp[i - 1] 个字符是不是左括号, 是则可以配对, dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
 *    dp[i - 1] 是相邻前面的对数, 2 是新匹配的一对, dp[i - dp[i - 1] - 2] 是所匹配的左括号再前一位能组成的对数
 * 4. 注意边界条件
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const dp = new Array(s.length).fill(0);
    let result = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (dp[i - 2] || 0) + 2;
            } else {
                if (s[i - 1 - dp[i - 1]] === '(') {
                    dp[i] = dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
                }
            }
        }
        result = Math.max(result, dp[i]);
    }

    return result;
};
// @lc code=end
