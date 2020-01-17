/*
 * @lc app=leetcode.cn id=1293 lang=javascript
 *
 * [1293] 网格中的最短路径
 * 
 * 1. 向 4 个方向做 DFS 遍历
 * 2. 记录走到当前点时的 k 值, 如果当前点有 k 值且当前 k值 <= 记录的k值, 则说明之前走过该点且优于当前这次结果
 * 3. 遍历时碰到障碍就 k - 1
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const map = {};
    const queue = [{ x: 0, y: 0, k, step: 0 }]
    while (queue.length) {
        const { x, y, k, step } = queue.shift();

        if (map[x * 100 + y] !== undefined && k <= map[x * 100 + y] || k < 0) {
            continue;
        }
        map[x * 100 + y] = k;

        if (x === grid.length - 1 && y === grid[0].length - 1) {
            return step;
        }

        if (y + 1 < grid[0].length) {
            queue.push({ x, y: y + 1, k: (grid[x][y + 1] === 1 ? k - 1: k), step: step + 1 });
        }
        if (y - 1 >= 0) {
            queue.push({ x, y: y - 1, k: (grid[x][y - 1] === 1 ? k - 1: k), step: step + 1 });
        }
        if (x + 1 < grid.length) {
            queue.push({ x: x + 1, y, k: (grid[x + 1][y] === 1 ? k - 1: k), step: step + 1 })
        }
        if (x - 1 >= 0) {
            queue.push({ x: x - 1, y, k: (grid[x - 1][y] === 1 ? k - 1: k), step: step + 1 })
        }
    }

    return -1;
};
// @lc code=end
