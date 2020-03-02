/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = [1, 1, 2, 5];
    for (let i = 4; i <= n; i++) {
        dp[i] = 0;
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j];
        }
    }
    return dp[n];
};