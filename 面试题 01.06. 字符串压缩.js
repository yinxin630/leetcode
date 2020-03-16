/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let result = [];
    for (let i = 0; i < S.length; i++) {
        if (result[result.length - 1] && S[i] === result[result.length - 1][0]) {
            result[result.length - 1][1]++;
        } else {
            result.push([S[i], 1]);
        }
    }
    const str = result.map(([c, n]) => c + n).join('');
    return str.length < S.length ? str : S;
};