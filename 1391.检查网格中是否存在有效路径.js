/*
给予队列做 BFS 搜索
每个街道有两个口, 其中一个口会走到你来的方向, 这种情况是非法的, 因此用 Set 记录下走过的点, 排除这种情况
d 用于获取每个格子可以前进的下一个点, key 是当前点的街道类型, value 是街道两个口, 每个口由 [x 坐标增量, y 坐标增量, 下个点可以连起来的街道类型] 三部分组成
遍历当前点的下一个可行点, 可行就加到 queue
*/

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const aaa = new Set([1, 4, 6]);
    const bbb = new Set([2, 5, 6]);
    const d = {
        1: [[0, -1, new Set([1, 4, 6])], [0, +1, new Set([1, 3, 5])]],
        2: [[-1, 0, new Set([2, 3, 4])], [+1, 0, new Set([2, 5, 6])]],
        3: [[0, -1, new Set([1, 4, 6])], [+1, 0, new Set([2, 5, 6])]],
        4: [[0, +1, new Set([1, 3, 5])], [+1, 0, new Set([2, 5, 6])]],
        5: [[0, -1, new Set([1, 4, 6])], [-1, 0, new Set([2, 3, 4])]],
        6: [[0, +1, new Set([1, 3, 5])], [-1, 0, new Set([2, 3, 4])]],
    }
    const set = new Set();
    const key = (a, b) => a + ',' + b;
    const isValid = (a, b, s) => grid[a] && grid[a][b] && s.has(grid[a][b]);
    const queue = [[0, 0]];
    while (queue.length) {
        const [x, y] = queue.shift();
        if (set.has(key(x, y))) {
            continue;
        }

        set.add(key(x, y));
        if (x === grid.length - 1 && y === grid[0].length - 1) {
            return true;
        }
        for (const [dx, dy, s] of d[grid[x][y]]) {
            if (isValid(x + dx, y + dy, s) && !set.has(x + dx, y + dy)) {
                queue.push([x + dx, y + dy]);
            }
        }
    }
    return false;
};
