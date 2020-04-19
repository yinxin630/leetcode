/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, relation, k) {
    const map = new Map();
    for (const r of relation) {
        const arr = map.get(r[0]) || [];
        arr.push(r[1]);
        map.set(r[0], arr);
    }
    
    let queue = [0];
    while (k) {
        k--;
        let t = queue;
        queue = [];
        for (const a of t) {
            queue.push(...(map.get(a) || []));
        }
    }
    return queue.filter(x => x === n - 1).length;
};