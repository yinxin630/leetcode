/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 * 
 * 1. 与39题类似, 在去除重复结果上有些不同, 在每轮遍历中, 相同的数字只用一次, 在不同轮遍历中, 可以用相同数字
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
                if (candidates[i] !== candidates[i - 1]) {
                    const t = candidates[i];
                    path.push(t);
                    candidates.splice(i, 1);
                    dfs(target - t, i);
                    candidates.splice(i, 0, t);
                    path.pop();
                }
            }
        }
    }
    dfs(target, 0);

    return result;
};
// @lc code=end
