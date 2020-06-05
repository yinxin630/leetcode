/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let good = 0;
    let bad = [];
    let count = 0;
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                good++;
            } else if (grid[i][j] === 2) {
                bad.push({i, j});
            }
        }
    }

    if (good === 0) {
        return 0;
    }

    while (bad.length) {
        count++;
        const queue = bad;
        bad = [];

        while (queue.length) {
            const {i, j} = queue.pop();
            for (const [di, dj] of direction) {
                const nexti = i + di;
                const nextj = j + dj;
                if (grid[nexti] && grid[nexti][nextj] === 1) {
                    good--;
                    grid[nexti][nextj] = 2;
                    bad.push({i: nexti, j: nextj});
                }
            }
        }
    }

    return good === 0 ? count - 1 : -1;
};