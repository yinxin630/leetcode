/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];
    function walk(str, l, r) {
        if (l >= n && r >= n) {
            ans.push(str);
            return;
        }
        if (l <= r) {
            walk(str + '(', l + 1, r);
        } else {
            if (l < n) {
                walk(str + '(', l + 1, r);
            }
            if (r < n) {
                walk(str + ')', l, r + 1);
            }
        }
    }
    walk('', 0, 0);
    return ans;
};