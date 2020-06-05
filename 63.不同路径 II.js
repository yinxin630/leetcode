/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const dp = [Math.abs(obstacleGrid[0][0] - 1)];
    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[i].length; j++) {
            if (!obstacleGrid[i] || obstacleGrid[i][j] === 1) {
                dp[j] = 0;
            } else if (!(i === 0 && j === 0)) {
                dp[j] = (obstacleGrid[i - 1] && obstacleGrid[i - 1][j] === 0 ? dp[j] : 0) + (obstacleGrid[i][j - 1] === 0 ? dp[j - 1] : 0);
            }
        }
    }
    return dp[obstacleGrid[0].length - 1];
};