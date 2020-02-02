/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const arr = mat.map((list, i) => {
        let t = 0;
        for (const n of list) {
            if (n === 1) {
                t++;
            } else {
                break;
            }
        }
        return {i, t};
    });

    arr.sort((a, b) => {
        if (a.t < b.t) {
            return -1;
        } else if (a.t > b.t) {
            return 1;
        } else {
            if (a.i < b.i) {
                return -1;
            } else {
                return 1;
            }
        }
    })

    return arr.slice(0, k).map(x => x.i);
};