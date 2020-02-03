/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 * 
 * 1. 从后向前遍历, 记录最后一个可达位置
 * 2. 如果 当前位置 + 可跳跃距离 >= 最后一个可达位置, 则说明当前位置可达, 更新可达位置
 * 3. 结果取决于 位置0 的可达情况
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let last = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= last) {
            last = i;
        }
        if (i === 0) {
            return i === last;
        }
    }

    return true;
};
// @lc code=end
