/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const a = new Set(); // 竖向
    const b = new Set(); // 右下斜向
    const c = new Set(); // 左下斜向
    const map = new Array(n);
    for (let i = 0; i < map.length; i++) {
        map[i] = new Array(n).fill('.');
    }

    function save() {
        const t = new Array(n);
        for (let i = 0; i < map.length; i++) {
            t[i] = map[i].join('');
        }
        result.push(t);
    }

    function dfs(i) {
        if (i === n) {
            return save();
        }
        for (let j = 0; j < n; j++) {
            if (a.has(j) || b.has(i + j) || c.has(i - j)) {
                continue;
            }
            map[i][j] = 'Q';
            a.add(j);
            b.add(i + j);
            c.add(i - j);
            dfs(i + 1);
            map[i][j] = '.';
            a.delete(j);
            b.delete(i + j);
            c.delete(i - j);
        }
    }
    dfs(0);

    return result;
};
// @lc code=end
