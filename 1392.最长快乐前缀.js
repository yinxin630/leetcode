/*
暴力搜索就可以, 数据太弱了...
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
    if (s.length <= 1) {
        return '';
    }
    for (let i = s.length - 1; i > 0; i--) {
        if (s.slice(0, i) === s.slice(s.length - i)) {
            return s.slice(0, i);
        }
    }
    return '';
};