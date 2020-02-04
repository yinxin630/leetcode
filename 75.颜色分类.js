/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const t = new Array(3).fill(0);
    for (const n of nums) {
        t[n]++;
    }
    let i = 0;
    let j = 0;
    while (i < t.length) {
        if (t[i] === 0) {
            i++;
            continue;
        }
        nums[j] = i;
        j++;
        t[i]--;
    }
};
// @lc code=end

