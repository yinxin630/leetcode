/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = [1];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[j] = (dp[j] || 0) + (dp[j - 1] || 0);
        }
    }
    return dp[n - 1];
};