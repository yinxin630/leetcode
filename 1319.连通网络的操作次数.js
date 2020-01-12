/**
 * 1. 使用并查集统计连通集合, 0 表示独立点, 1 ~ n 表示集合, 数值相同则在同一集合
 * 2. n 个集合需要 n - 1 条线连接起来
 * 3. m 个独立的点 需要 m 条线连接起来
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if (connections.length < n - 1) {
        return -1;
    }

    let union = new Array(n).fill(0);
    let current = 1;

    for (const [a, b] of connections) {
        if (union[a] === 0 && union[b] === 0) {
            union[a] = union[b] = current;
            current++;
        } else {
            if (union[a] === 0) {
                union[a] = union[b];
            } else if (union[b] === 0) {
                union[b] = union[a];
            } else {
                const v = union[b];
                union[b] = union[a];
                for (let i = 0; i < union.length; i++) {
                    if (union[i] === v) {
                        union[i] = union[a];
                    }
                }
            }
        }
    }

    let result = 0;
    const set = new Set();
    for (const n of union) {
        if (n === 0) {
            result++;
        } else {
            set.add(n);
        }
    }

    return result + set.size - 1;
};