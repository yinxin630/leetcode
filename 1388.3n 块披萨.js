/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
    const count = slices.length / 3;
    let result = 0;

    const dp = [];
    for (let i = 0; i < count; i++) {
        dp[i] = [];
        let frontMax = 0;
        for (let j = 0; j < slices.length - 1; j++) {
            if (i === 0) {
                dp[i][j] = slices[j];
            } else {
                frontMax = Math.max(frontMax, (dp[i - 1][j - 2] || 0));
                dp[i][j] = Math.max(frontMax + slices[j]);
            }
            result = Math.max(result, dp[i][j]);
        }
    }

    for (let i = 0; i < count; i++) {
        dp[i] = [];
        let frontMax = 0;
        for (let j = 1; j < slices.length; j++) {
            if (i === 0) {
                dp[i][j - 1] = slices[j];
            } else {
                frontMax = Math.max(frontMax, (dp[i - 1][j - 3] || 0));
                dp[i][j - 1] = Math.max(frontMax + slices[j]);
            }
            result = Math.max(result, dp[i][j - 1]);
        }
    }

    return result;
};