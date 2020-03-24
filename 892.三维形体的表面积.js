/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            result += grid[i][j] ? grid[i][j] * 4 + 2 : 0;
            if (i !== 0) {
                result -= Math.min(grid[i - 1][j], grid[i][j]) * 2;
            }
            if (j !== 0) {
                result -= Math.min(grid[i][j - 1], grid[i][j]) * 2;
            }
        }
    }
    return result;
};