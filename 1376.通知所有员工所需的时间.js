/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const map = new Map();
    for (let i = 0; i < manager.length; i++) {
        if (map.has(manager[i])) {
            map.get(manager[i]).push(i);
        } else {
            map.set(manager[i], [i]);
        }
    }

    let result = 0;
    function dfs(cur, cost) {
        cost += informTime[cur];
        const child = map.get(cur) || [];
        if (child.length) {
            for (const n of child) {
                dfs(n, cost);
            }
        } else {
            result = Math.max(result, cost);
        }
    }
    dfs(headID, 0);

    return result;
};
