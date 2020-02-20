/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if (s.length === 0) {
        return 0;
    } else {
        for (let a = 0, b = s.length - 1; a <= b; a++, b--) {
            if (s[a] !== s[b]) {
                return 2;
            }
        }
        return 1;
    }
};