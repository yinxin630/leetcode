/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 * 
 * 1. 正则匹配分词
 * 2. 去掉空单词
 * 3. 顺序翻转
 * 4. 拼接单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(/[ ]+/).filter(word => word).reverse().join(' ');
};
// @lc code=end

