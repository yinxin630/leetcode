/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    const lst = new Array(32).fill(-1);
    let result = 0;
    let h = 0;
    lst[h] = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') h ^= (1 << 0);
        else if (s[i] === 'e') h ^= (1 << 1);
        else if (s[i] === 'i') h ^= (1 << 2);
        else if (s[i] === 'o') h ^= (1 << 3);
        else if (s[i] === 'u') h ^= (1 << 4);
        if (lst[h] >= 0) {
            result = Math.max(result, i + 1 - lst[h]);
        } else {
            lst[h] = i + 1;
        }
    }
    return result;
};
