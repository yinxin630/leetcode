/**
 * 1. dp[i][j] 表示由 0,0 到 i,j 位置矩形的和
 * 2. 遍历 i,j, 计算每个坐标所在矩形的范围
 * 3. 计算矩形大小, x > 0, y > 0
 *    如果矩形左上角坐标是 0,0, 则面积等于 右下角点的和
 *    如果矩形左上角坐标是 0,x, 则面积等于 右下角点的和 - 左下角左一个点的和
 *    如果矩形左上角坐标是 x,0, 则面积等于 右下角点的和 - 右上角上一个点的和
 *    如果矩形左上角坐标是 x,y, 则面积等于 右下角点的和 - 左下角左一个点的和 - 右上角上一个点的和 + 左上角前一个上一个点的和
 */

/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    const dp = [
        [mat[0][0]]
    ];
    for (let i = 1; i < mat.length; i++) {
        dp[0][i] = dp[0][i - 1] + mat[0][i];
    }
    for (let i = 1; i < mat.length; i++) {
        dp[i] = [dp[i - 1][0] + mat[i][0]]
    }
    for (let i = 1; i < mat.length; i++) {
        for (let j = 1; j < mat[0].length; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + mat[i][j];
        }
    }

    const result = [];
    for (let i = 0; i < mat.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat[0].length; j++) {
            const x1 = Math.max(i - K, 0);
            const x2 = Math.min(i + K, mat.length - 1);
            const y1 = Math.max(j - K, 0);
            const y2 = Math.min(j + K, mat[0].length - 1);

            if (x1 === 0) {
                if (y1 === 0) {
                    result[i][j] = dp[x2][y2];
                } else {
                    result[i][j] = dp[x2][y2] - dp[x2][y1 - 1];
                }
            } else {
                if (y1 === 0) {
                    result[i][j] = dp[x2][y2] - dp[x1 - 1][y2];
                } else {
                    result[i][j] = dp[x2][y2] - dp[x2][y1 - 1] - dp[x1 - 1][y2] + dp[x1 - 1][y1 - 1];
                }
            }
        }
    }

    return result;
};
