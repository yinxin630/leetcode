/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 * 
 * 1. 先判断 1 是否为最终结果, 是则直接返回, 不是则把 1 作为标志位, 把 <= 0 和 > length 的位置都置为 1
 * 2. 以原数组作为索引表, 遍历数字, 将当前数字作为 index, 将 index 位置的数字置为负数, 表示存在
 *    因为是以负数为标志, 所以当前数字可能会是负数, 需要取绝对值才是原本数字
 *    如果当前数字等于 length, 不能更新 length 位置(超界了), 用一个单独标识存是否出现过这种情况
 * 3. 经过处理后, 从下标 2 开始查找(0 不符合要求, 1 已经作为标志位了, 如果 1 是结果, 在第 1 步就结束了)第一个大于 0 的数字, 下标即结果
 *    如果没找到, 则说明 1 ~ n-1 都是存在的, 结果只能是 n 或者 n + 1, 具体是哪个取决于第 2 步的额外标识 n 是否出现过
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        }
        if (nums[i] < 1 || nums[i] > nums.length) {
            nums[i] = 1;
        }
    }

    if (count === 0) {
        return 1;
    }
    if (nums.length === 1) {
        return 2;
    }

    let hasN = false;
    for (let i = 0; i < nums.length; i++) {
        const n = Math.abs(nums[i]);
        if (n === nums.length) {
            hasN = true;
        } else {
            nums[n] = -Math.abs(nums[n]);
        }
    }

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i;
        }
    }
    return nums.length + (hasN ? 1 : 0);
};
// @lc code=end
