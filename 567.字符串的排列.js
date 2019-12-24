/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 * 
 * 1. 计算 s1 中每个字母出现次数
 * 2. 以 s1 的长度作为窗口长度, 每次计算 s2 在窗口长度内各字母出现次数
 * 3. 对比次数, 一致则返回结果
 * 4. 每次更新窗口后, 只需要进入创建字母次数++, 和移出窗口字母次数--, 即可
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var list1 = new Array(26).fill(0);
    for (var i = 0; i < s1.length; i++) {
        list1[s1.charCodeAt(i) - 97]++;
    }

    var list2 = new Array(26).fill(0);
    for (var i = 0; i < s1.length; i++) {
        list2[s2.charCodeAt(i) - 97]++;
    }

    function match() {
        for (var i = 0; i < 26; i++) {
            if (list1[i] !== list2[i]) {
                return false;
            }
        }
        return true;
    }

    if (match()) {
        return true;
    }

    for (var i = s1.length; i < s2.length; i++) {
        list2[s2.charCodeAt(i) - 97]++;
        list2[s2.charCodeAt(i - s1.length) - 97]--;

        if (match()) {
            return true;
        }
    }

    return false;
};
// @lc code=end

