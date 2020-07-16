/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
    let result = 0;
    const dp = [];
    for (let i = 0; i < grid.length; i++) {
        dp[i] = [];
        for (let j = 0; j < grid[i].length; j++) {
            dp[i][j] = [];
            if (grid[i][j] === 0) {
                dp[i][j][0] = 0;
                dp[i][j][1] = 0;
            } else if (i === 0) {
                dp[i][j][0] = 1 + (j > 0 ? dp[i][j - 1][0] : 0);
                dp[i][j][1] = 1;
            } else if (j === 0) {
                dp[i][j][0] = 1;
                dp[i][j][1] = 1 + (i > 0 ? dp[i - 1][j][1] : 0);
            } else {
                dp[i][j][0] = 1 + dp[i][j - 1][0];
                dp[i][j][1] = 1 + dp[i - 1][j][1];
            }

            let len = Math.min(...dp[i][j]);
            while (len) {
                if (dp[i - len + 1][j][0] >= len && dp[i][j - len + 1][1] >= len) {
                    break;
                }
                len--;
            }
            result = Math.max(result, len);
        }
    }
    return result * result;
};
