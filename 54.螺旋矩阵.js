/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length < 1) {
        return [];
    }
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let d = 0;
    let x = 0, y = -1;
    let count = matrix.length * matrix[0].length;
    let result = [];
    while (count) {
        const nextX = x + directions[d][0];
        const nextY = y + directions[d][1];
        if (matrix[nextX] && matrix[nextX][nextY] !== undefined) {
            result.push(matrix[nextX][nextY]);
            matrix[nextX][nextY] = undefined;
            count--;
            x = nextX;
            y = nextY;
        } else {
            d = (d + 1) % directions.length;
        }
    }
    return result;
};