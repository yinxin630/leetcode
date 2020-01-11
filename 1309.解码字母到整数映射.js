/*
 * @lc app=leetcode.cn id=1308 lang=javascript
 *
 * [1308] 解码字母到整数映射
 * 
 * 1. 只有 单数字 和 双数字+# 两种情况
 * 2. 倒序遍历, 判断当前位置是否为 #, 是则向前取两个数字, 否则取当前位置数字
 * 3. 数字转字符使用, String.fromCharCode
 * 
 */

 /**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const result = [];
    for (let i = s.length - 1; i >= 0; ) {
        if (s[i] === '#') {
            result.unshift(String.fromCharCode(96 + (+s[i - 2] * 10) + (+s[i - 1])));
            i -= 3;
        } else {
            result.unshift(String.fromCharCode(96 + (+s[i])));
            i -= 1;
        }
    }
    return result.join('');
};
