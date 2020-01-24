/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 * 
 * 1. 从小到大排序, 记录下标, 遍历时下标不变或加一, 避免重复结果
 * 2. 使用临时数字会比不断的创建新数组要更快, 且节约内存
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target, start) {
    candidates.sort((a, b) => a - b);
    const result = [];
    const path = [];

    function dfs(target, start) {
        if (target === 0) {
            result.push([...path]);
        } else if (target > 0) {
            for (let i = start; i < candidates.length; i++) {
                if (target < candidates[i]) {
                    break;
                }
                path.push(candidates[i]);
                dfs(target - candidates[i], i);
                path.pop();
            }
        }
    }
    dfs(target, 0);

    return result;
};
// @lc code=end
