/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const dp = [0, 0, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = i - 1;
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i - j, dp[i - j]));
    }
  }
  return dp[n];
};
