/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 
 * dp[i][j].h: 以 i,j 点为最右边端点的横线长度
 * dp[i][j].v: 以 i,j 点为最下边端点的竖线长度
 * 如果 i,j 位置是黑色像素(0), 则必然存在 [i, j, 1] 的方阵, 然后取横线和竖线的最短长度 k
 * result[2] 是当前方阵最大长度, 我们需要遍历 [k, result[2]) 左闭右开, 来寻找更长的方阵
 * 对于任意 k, 需要满足 3 个条件, 则方阵成立
 * 1. 如果 matrix[i - k + 1][j - k + 1] 是黑色像素, 则方阵左上角成立
 * 2. 如果 dp[i - k + 1][j].h >= k, 即以方阵右上角点为端点的横线长度大于等于 k, 则方阵右上角成立
 * 3. 如果 dp[i][j - k + 1].v >= k, 即以方阵坐下角点为端点的竖线长度大于等于 k, 则方阵左下角角成立
 */
var findSquare = function (matrix) {
  const dp = [];
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      dp[i][j] = {};
      dp[i][j].h = matrix[i][j] === 0 ? ((dp[i] && dp[i][j - 1] && dp[i][j - 1].h) || 0) + 1 : 0;
      dp[i][j].v =
        matrix[i][j] === 0 ? ((dp[i - 1] && dp[i - 1][j] && dp[i - 1][j].v) || 0) + 1 : 0;
    }
  }

  let result = [];
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (result.length === 0) {
          result = [i, j, 1];
        }
        const { h, v } = dp[i][j];
        for (let k = Math.min(h, v); k > result[2]; k--) {
          if (
            matrix[i - k + 1] &&
            matrix[i - k + 1][j - k + 1] === 0 &&
            (dp[i - k + 1] && dp[i - k + 1][j] ? dp[i - k + 1][j].h : 0) >= k &&
            (dp[i] && dp[i][j - k + 1] ? dp[i][j - k + 1].v : 0) >= k
          ) {
            result = [i - k + 1, j - k + 1, k];
            break;
          }
        }
      }
    }
  }
  return result;
};
