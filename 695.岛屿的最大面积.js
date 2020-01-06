/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 * 
 * 1. 遍历点, 找到任一非空点, 基于该点做 BFS 搜索
 * 2. 记录已访问的坐标, 在搜索时排除
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const map = {};
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (map[i] && map[i][j]) {
                continue;
            }

            if (grid[i][j]) {
                const queue = [[i, j]];
                let count = 0;
                function isValide(x, y) { return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && !(map[x] && map[x][y]) && grid[x][y] === 1 }
                while (queue.length) {
                    const node = queue.shift();
                    const [x, y] = node;

                    if (map[x] && map[x][y]) {
                        continue;
                    }
                    map[x] = map[x] || {};
                    map[x][y] = 1;

                    count++;
                    if (isValide(x - 1, y)) {
                        queue.push([x - 1, y]);
                    }
                    if (isValide(x + 1, y)) {
                        queue.push([x + 1, y]);
                    }
                    if (isValide(x, y - 1)) {
                        queue.push([x, y - 1]);
                    }
                    if (isValide(x, y + 1)) {
                        queue.push([x, y + 1]);
                    }
                }
                result = Math.max(result, count);
            }
        }
    }

    return result;
};
// @lc code=end

// console.log(maxAreaOfIsland(
//     [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// ));