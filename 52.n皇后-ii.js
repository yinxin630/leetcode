/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let result = 0;
    const a = new Set(); // 竖向
    const b = new Set(); // 右下斜向
    const c = new Set(); // 左下斜向

    function dfs(i) {
        if (i === n) {
            result++;
            return;
        }
        for (let j = 0; j < n; j++) {
            if (a.has(j) || b.has(i + j) || c.has(i - j)) {
                continue;
            }
            a.add(j);
            b.add(i + j);
            c.add(i - j);
            dfs(i + 1);
            a.delete(j);
            b.delete(i + j);
            c.delete(i - j);
        }
    }
    dfs(0);

    return result;
};
// @lc code=end

