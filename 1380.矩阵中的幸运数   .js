/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
        let min = 0;
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] < matrix[i][min]) {
                min = j;
            }
        }
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][min] > matrix[i][min]) {
                break;
            }
            if (k === matrix.length - 1) {
                result.push(matrix[i][min]);
            }
        }
    }
    return result;
};