/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    const result = [];
    for (let i = 0; i < seq.length; i++) {
        result[i] = seq[i] === '(' ? (i % 2) : ((i + 1) % 2);
    }
    return result;
};