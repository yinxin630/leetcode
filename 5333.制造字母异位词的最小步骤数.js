/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }

    let temp = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[t[i]]) {
            temp++;
            map[t[i]]--;
        }
    }

    return s.length - temp;
};
