/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const n = 2 ** nums.length;
    for (let i = 0; i < n; i++) {
        const t = [];
        const str = i.toString(2);
        for (let j = 0; j < nums.length; j++) {
            if (str[j] === '1') {
                t.push(nums[str.length - 1 - j]);
            }
        }
        result.push(t);
    }
    return result;
};
// @lc code=end
