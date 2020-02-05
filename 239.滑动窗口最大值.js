/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 * 
 * 1. 使用双端队列存当前滑动窗口内的数字索引, 要满足要求: 数字是从大到小排序的
 * 2. 怎么保持要求呢? 对于每轮循环
 *    1. 先检测队列头(也就是窗口内第一个索引), 是否已经超出窗口范围, 超出则直接移除
 *    2. 将队列头所有小于当前数字的索引移除
 *    3. 将队列为所有小于当前数字的索引移除
 *    4. 将当前数组索引加到队列末尾
 * 3. 这样就保证了当前数字索引在队列中是处于合适位置, 它前面的比它大, 后面的额比它小
 * 4. 每次取队列头索引指向的数字, 即是当前窗口内的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length <= 1) {
        return nums;
    }

    const queue = [0];
    for (let i = 1; i < k; i++) {
        while (nums[queue[0]] < nums[i]) {
            queue.shift();
        }
        while (nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop();
        }
        queue.push(i);
    }

    const result = [nums[queue[0]]];
    for (let i = k; i < nums.length; i++) {
        if (queue[0] <= i - k) {
            queue.shift();
        }
        while (nums[queue[0]] < nums[i]) {
            queue.shift();
        }
        while (nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop();
        }
        queue.push(i);
        result.push(nums[queue[0]]);
    }

    return result;
};
// @lc code=end
