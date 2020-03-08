/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    const map = new Map();
    for (let [a, b] of edges) {
        if (b < a) {
            const t = a;
            a = b;
            b = t;
        }
        if (map.get(a)) {
            map.get(a).push(b);
        } else {
            map.set(a, [b]);
        }
    }

    let result = 0;
    function dfs(t, cur, r) {
        if (result) {
            return;
        }
        if (t === 0) {
            if (cur === target) {
                result = r;
            }
            return;
        }
        const child = map.get(cur) || [];
        if (child.length) {
            for (const i of child) {
                dfs(t - 1, i, r / child.length);
            }
        } else {
            dfs(t - 1, cur, r);
        }
    }
    dfs(t, 1, 1);
    return result;
};
