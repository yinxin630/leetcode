/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    const result = [];
    const P = [];
    for (let i = 1; i <= m; i++) {
        P.push(i);
    }
    for (const q of queries) {
        const i = P.indexOf(q);
        result.push(i);
        const t = P[i];
        P.splice(i, 1);
        P.unshift(t);
    }
    return result;
};