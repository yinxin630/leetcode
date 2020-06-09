/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const map = new Map();
    for (const [a, b] of connections) {
        const map1 = map.get(a) || new Map();
        map1.set(b, 1);
        map.set(a, map1);
        const map2 = map.get(b) || new Map();
        map2.set(a, 0);
        map.set(b, map2);
    }

    const queue = [0];
    let arrive = new Set(queue);
    let result = 0;
    while (queue.length) {
        const i = queue.shift();
        const next = map.get(i);
        for (const n of next.keys()) {
            if (arrive.has(n)) {
                continue;
            }
            result += next.get(n);
            queue.push(n);
            arrive.add(n);
        }
    }
    return result;
};