/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let result = 0;
    for (let i = 1; i <= n; i *= 10) {
        const div = i * 10;
        result += Math.floor(n / div) * i + Math.min(Math.max(n % div - i + 1, 0), i);
    }

    return result;
};
// @lc code=end
