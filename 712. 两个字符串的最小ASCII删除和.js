/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  const dp = [[]];
  for (let i = 0; i <= s1.length; i++) {
    dp[i + 1] = [];
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 0;
      } else if (i === 0) {
        dp[i][j] = (dp[i][j - 1] || 0) + s2.charCodeAt(j - 1);
      } else if (j === 0) {
        dp[i][j] = ((dp[i - 1] && dp[i - 1][j]) || 0) + s1.charCodeAt(i - 1);
      } else {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + s1.charCodeAt(i - 1),
            dp[i][j - 1] + s2.charCodeAt(j - 1),
          );
        }
      }
    }
  }
  return dp[s1.length][s2.length];
};
