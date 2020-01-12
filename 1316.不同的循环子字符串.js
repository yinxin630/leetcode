/**
 * 1. 暴力破解...
 */

/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
    const set = new Set();
    for (let i = 1; i <= text.length >> 1; i++) {
        for (let j = i; j < text.length; j++) {
            if (text.substring(j, j + i) === text.substring(j - i, j)) {
                set.add(text.substr(j, i));
            }
        }
    }

    return set.size;
};
