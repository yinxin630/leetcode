/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    const dp = [];

    dp[0] = [jobDifficulty[0]];
    for (let i = 1; i < jobDifficulty.length; i++) {
        dp[0][i] = Math.max(dp[0][i- 1], jobDifficulty[i]);
    }

    for (let i = 1; i < d; i++) {
        dp[i] = [];
        for (let j = i; j < jobDifficulty.length; j++) {
            dp[i][j] = dp[i - 1][j - 1] + jobDifficulty[j];
            let max = jobDifficulty[j];
            for (let k = j - 1; k >= i; k--) {
                max = Math.max(max, jobDifficulty[k]);
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k - 1] + max);
            }
        }
    }

    return dp[d - 1][jobDifficulty.length - 1] || -1;
};
