/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 * 
 * 1. logn 肯定是二分搜索
 * 2. 选取中间值后, 需要判断拐点在哪边, 来确定目标数字会在哪边
 * 3. 当中间值大于左端值, 则左侧是完全递增序列, 如果目标数字在左侧范围内则查找左侧, 反之查找右侧
 * 4. 同理, 当中间值小于左端值, 则右侧是完全递增序列, 如果目标数字在右侧范围内则查找右侧, 反之查找左侧
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0, j = nums.length - 1;

    while (i <= j) {
        const mid = (i + j) >> 1;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] >= nums[i]) {
            if (target >= nums[i] && target < nums[mid]) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[j]) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
    }
    return -1;
};
// @lc code=end

