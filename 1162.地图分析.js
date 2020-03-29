/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j, 0]);
            }
        }
    }
    if (queue.length === 0 || queue.length === grid.length * grid[0].length) {
        return -1;
    }

    let result = 0;
    while (queue.length) {
        const [x, y, z] = queue.shift();
        result = Math.max(result, z);
        if (grid[x - 1] && grid[x - 1][y] === 0) {
            grid[x - 1][y] = 1;
            queue.push([x - 1, y, z + 1]);
        }
        if (grid[x + 1] && grid[x + 1][y] === 0) {
            grid[x + 1][y] = 1;
            queue.push([x + 1, y, z + 1]);
        }
        if (grid[x][y - 1] === 0) {
            grid[x][y - 1] = 1;
            queue.push([x, y - 1, z + 1]);
        }
        if (grid[x][y + 1] === 0) {
            grid[x][y + 1] = 1;
            queue.push([x, y + 1, z + 1]);
        }
    }
    return result;
};