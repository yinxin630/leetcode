/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    const foods = new Set();
    const table = new Map();
    for (const order of orders) {
        foods.add(order[2]);
        const m = table.get(order[1]) || new Map();
        const c = m.get(order[2]) || 0;
        m.set(order[2], c + 1);
        table.set(order[1], m);
    }

    const result = [['Table']];
    result[0].push(...Array.from(foods).sort((a, b) => a < b ? -1 : 1));

    const tables = Array.from(table.keys()).sort((a, b) => +a - +b);
    for (const t of tables) {
        const a = [t];
        const m = table.get(t);
        for (let i = 1; i < result[0].length; i++) {
            a.push((m.get(result[0][i]) || 0).toString());
        }
        result.push(a);
    }
    return result;
};