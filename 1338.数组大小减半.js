/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const map = {};
    for (const n of arr) {
        map[n] = map[n] || 0;
        map[n]++;
    }

    let sum = 0;
    const list = Object.keys(map).map(n => {
        sum += map[n];
        return {
            n,
            c: map[n]
        }
    })

    list.sort((a, b) => b.c - a.c)

    let result = 0;
    let current = sum;
    for (const a of list) {
        result++;
        current -= a.c;
        if (current * 2 <= sum) {
            break;
        }
    }
    return result;
};