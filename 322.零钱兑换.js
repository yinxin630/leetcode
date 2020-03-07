/**
 * BFS 遍历
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const set = new Set([amount]);
    let queue = [[amount, 0]];
    while (queue.length) {
        const [a, b] = queue.shift();
        if (a === 0) {
            return b;
        }
        for (const c of coins) {
            if (a - c >= 0 && !set.has(a - c)) {
                set.add(a - c);
                queue.push([a - c, b + 1]);
            }
        }
    }
    return -1;
};

/**
 * 动态规划
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[[amount]];
};
*/