/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const queue = [0];
    const set = new Set(queue);

    while (queue.length) {
        const i = queue.shift();
        
        if (set.has(leftChild[i])) {
            return false;
        } else if (leftChild[i] !== -1) {
            set.add(leftChild[i]);
            queue.push(leftChild[i]);
        }

        if (set.has(rightChild[i])) {
            return false;
        } else if (rightChild[i] !== -1) {
            set.add(rightChild[i]);
            queue.push(rightChild[i]);
        }
    }

    return set.size === n;
};
