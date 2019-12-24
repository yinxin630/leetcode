/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 * 
 * 思路:
 * 1. 记录最大值
 * 2. 记录当前子字符串起点
 * 3. 记录每个字母出现的位置, 如果位置有值则说明该字母出现过了
 *    如果该字母的上一次出现位置大于起点值, 则更新起点位置
 *    反之, 则继续用当前起点值, 因为说明有其它重复字母的上一次位置是大于当前字母上一次位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var map = {};
    var start = -1;

    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined && start < map[s[i]]) {
            start = map[s[i]];
        }
        map[s[i]] = i;
        max = Math.max(max, i - start);
    }

    return max;
};
// @lc code=end

