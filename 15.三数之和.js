/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 
 * 1. 先排序
 * 2. 选取标杆元素, 左右推进向中间查找. 标杆元素从最左面选取, 后面遇到相同标杆值可以直接跳过
 * 3. 向中间推进时, 需要跳过相同值
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let a = i + 1;
        let b = nums.length - 1;
        while (a < b) {
            const sum = nums[i] + nums[a] + nums[b];
            if (sum === 0) {
                result.push([nums[i], nums[a], nums[b]]);
            }
            if (sum <= 0) {
                do {
                    a++;
                } while (nums[a] === nums[a - 1]);
            }
            if (sum >= 0) {
                do {
                    b--;
                } while (nums[b] === nums[b + 1]);
            }
        }
    }

    return result;
};
// @lc code=end

