/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let result = 0;
    const stack = [-1];
    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]) {
            const j = stack.pop();
            result = Math.max(result, heights[j] * (i - stack[stack.length - 1] - 1));
        }
        stack.push(i);
    }

    while (stack[stack.length - 1] !== -1) {
        const j = stack.pop();
        result = Math.max(result, heights[j] * (heights.length - stack[stack.length - 1] - 1));
    }

    return result;
};
// @lc code=end
