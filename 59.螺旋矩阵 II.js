/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let d = 0;
    let x = 0, y = -1;
    let current = 0;
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n).fill(0);
    }
    while (current < n * n) {
        const nextX = x + directions[d][0];
        const nextY = y + directions[d][1];
        if (result[nextX] && result[nextX][nextY] === 0) {
            current++;
            result[nextX][nextY] = current;
            x = nextX;
            y = nextY;
        } else {
            d = (d + 1) % directions.length;
        }
    }
    return result;
};