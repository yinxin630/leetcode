/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const dp = [];
    let max = 0;
    for (let i = 0; i <= word1.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= word2.length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = i || j;
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1), dp[i - 1][j] + 1, dp[i][j - 1] + 1);
            }
        }
    }
    return dp[word1.length][word2.length];
};