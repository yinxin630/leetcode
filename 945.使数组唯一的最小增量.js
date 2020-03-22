/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    A.sort((a, b) => a - b);
    const queue = [];
    let result = 0;
    let prev = A[0] - 1;
    let i = 0;
    while (i < A.length) {
        if (A[i] === prev) {
            queue.push(A[i]);
        } else if (A[i] > prev + 1) {
            if (queue.length) {
                result += prev + 1 - queue.shift();
                prev++;
                continue;
            } else {
                prev = A[i];
            }
        } else {
            prev++;
        }
        i++;
    }
    while (queue.length) {
        result += prev + 1 - queue.shift();
        prev++;
    }
    return result;
};