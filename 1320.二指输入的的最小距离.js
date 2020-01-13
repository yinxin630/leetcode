/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const map = {};
    for (let i = 0; i < chars.length; i++) {
        const v = chars.charCodeAt(i) - 65;
        map[v] = [Math.floor(v / 6), v % 6];
    }

    function getDis(a, b) {
        const [x1, y1] = map[a];
        const [x2, y2] = map[b];
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    const dp = [];
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i <= word.length; i++) {
        dp[i] = new Array(26);
        for (let j = 0; j < 26; j++) {
            dp[i][j] = new Array(26).fill((i === 0 ? 0 : Number.MAX_SAFE_INTEGER));
        }
        if (i === 0) {
            continue;
        }

        const v = word.charCodeAt(i - 1) - 65;
        for (let l = 0; l < 26; l++) {
            for (let r = 0; r < 26; r++) {
                if (dp[i - 1][l][r] !== Number.MAX_SAFE_INTEGER) {
                    dp[i][v][r] = Math.min(dp[i][v][r], dp[i - 1][l][r] + getDis(l, v));
                    dp[i][l][v] = Math.min(dp[i][l][v], dp[i - 1][l][r] + getDis(v, r));
                }

                if (i === word.length) {
                    result = Math.min(result, dp[i][l][v], dp[i][v][r]);
                }
            }
        }
    }

    return result;
};
