/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 12;
    const mod = 10 ** 9 + 7;
    let repeat = 6;
    let unrepeat = 6;
    for (let i = 2; i <= n; i++) {
        const newRepeat = (repeat * 3 + unrepeat * 2) % mod;
        const newUnRepeat = (repeat * 2 + unrepeat * 2) % mod;
        repeat = newRepeat;
        unrepeat = newUnRepeat;
    }
    return (repeat + unrepeat) % mod;
};