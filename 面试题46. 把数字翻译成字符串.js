/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    const dp = [];
    let prev = null;
    let i = 0;
    while (num >= 0) {
        const n = num % 10;
        if (prev === null) {
            prev = n;
            dp[i] = 1;
            i++;
        } else {
            dp[i] = dp[i - 1];
            if (n !== 0 && n * 10 + prev < 26) {
                dp[i] += (dp[i - 2] || 1);
            }
            prev = n;
            i++;
        }
        num = Math.floor(num / 10);
        if (num === 0) {
            break;
        }
    }
    // console.log(dp);
    return dp[i - 1]
};

console.log(translateNum(100));