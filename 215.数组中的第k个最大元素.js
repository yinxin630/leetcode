/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 * 
 * 1. 使用容量为 k 的最小堆
 * 2. 最终堆内就是最大的 k 个数字, 堆顶就是结果
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = [];

    for (const n of nums) {
        if (heap.length === k) {
            if (n < heap[0]) {
                continue;
            }

            heap[0] = heap[heap.length - 1];
            heap.pop();

            let i = 0;
            while (i < heap.length) {
                let next = i;
                
                if (heap[i * 2 + 1] && heap[i * 2 + 1] < heap[next]) {
                    next = i * 2 + 1;
                }
                if (heap[i * 2 + 2] && heap[i * 2 + 2] < heap[next]) {
                    next = i * 2 + 2;
                }

                if (i === next) {
                    break;
                }

                const t = heap[i];
                heap[i] = heap[next];
                heap[next] = t;
                i = next;
            }
        }

        heap[heap.length] = n;

        let i = heap.length - 1;
        while (i > 0) {
            let next = Math.floor((i - 1) / 2);
            if (heap[next] < heap[i]) {
                break;
            }

            const t = heap[i];
            heap[i] = heap[next];
            heap[next] = t;
            i = next;
        }
    }

    return heap[0];
};

// var findKthLargest = function(nums, k) {
//     nums.sort((a, b) => b - a);
//     return nums[k - 1];
// };

// @lc code=end

