/*
 * @lc app=leetcode.cn id=1311 lang=javascript
 *
 * [1311] 让字符串成为回文串的最少插入次数
 * 
 * 1. 思考回文串定义, 字符串和反序字符串应该是一模一样的
 * 2. 将字符串 a 反序得到字符串 b, 然后问题就可以转化为, 求串 a 和 b 的最长公共序列
 * 3. 串的长度 - 最长公共序列长度, 就是差异字符的个数
 * 4. 补上这些个数的字符, 就构成回文串了
 * 
 * 1. 求最长公共序列, 是标准的 dp 算法
 * 2. 如果当前位置字符相同, 则 dp[i][j] = dp[i - 1][j - 1] + 1;
 * 3. 如果不同, 则 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
 * 
 */

 /**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const a = s;
    const b = s.split('').reverse().join('');
    const dp = [];

    // console.log(a, b);

    for (let i = 0; i <= a.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= b.length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else {
                if (a[i - 1] === b[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
    }

    // console.log(dp);
    return s.length - dp[s.length][s.length];
};

// console.log(minInsertions("no"));