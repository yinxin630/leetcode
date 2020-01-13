/*
 * @lc app=leetcode.cn id=1092 lang=javascript
 *
 * [1092] 最短公共超序列
 * 
 * 1. 求最长公共子序列
 * 2. 基于公共子序列构建超序列, 遍历公共子序列
 *    如果 str1 和 str2 当前字符与子序列当前字符不相符, 则按顺序插入 str1 和 str2 中多的字符到结果中, 直到 str1 和 str2 当前字符与子序列当前字符相符
 *    如果相符, 则将当前字符插入结果中, 子序列、str1、str2 同时前进一位
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const dp = [];
    let lcs = '';
    for (let i = 0; i <= str1.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= str2.length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = '';
            } else {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
                } else {
                    dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
                }
            }
            if (dp[i][j].length > lcs.length) {
                lcs = dp[i][j]
            }
        }
    }

    let result = [];
    let a = 0;
    let b = 0;
    for (let i = 0; i < lcs.length; i++) {
        while (str1[a] !== lcs[i]) {
            result.push(str1[a]);
            a++;
        }
        while (str2[b] !== lcs[i]) {
            result.push(str2[b]);
            b++;
        }

        result.push(lcs[i]);
        a++;
        b++;
    }

    while (a < str1.length) {
        result.push(str1[a]);
        a++;
    }
    while (b < str2.length) {
        result.push(str2[b]);
        b++;
    }

    return result.join('');
};
// @lc code=end
