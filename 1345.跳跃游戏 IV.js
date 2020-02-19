/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const dp = [];
    dp[arr.length - 1] = 0;

    const map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] || [];
        map[arr[i]].push(i);
    }

    const queue = [arr.length - 1];
    while (queue.length) {
        const i = queue.shift();
        if (i === 0) {
            return dp[0];
        }

        if (i + 1 < arr.length && dp[i + 1] === undefined) {
            dp[i + 1] = dp[i] + 1;
            queue.push(i + 1);
        }
        if (i - 1 >= 0 && dp[i - 1] === undefined) {
            dp[i - 1] = dp[i] + 1;
            queue.push(i - 1);
        }
        for (const n of map[arr[i]]) {
            if (n !== i && dp[n] === undefined) {
                dp[n] = dp[i] + 1;
                queue.push(n);
            }
        }
    }

    return 0;
};
