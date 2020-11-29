/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  function getSum(num) {
    let result = 0;
    while (num) {
      result += num % 10;
      num = Math.floor(num / 10);
    }
    return result;
  }

  let baseI = -1;
  let baseJ = -1;
  const map = [];
  for (let i = 0; i < m; i++) {
    map[i] = new Array(n).fill(1);
    if (i % 10 === 0) {
      baseI++;
    }
    baseJ = -1;
    for (let j = 0; j < n; j++) {
      if (j % 10 === 0) {
        baseJ++;
      }
      if (baseI + (i % 10) + baseJ + (j % 10) > k) {
        map[i][j] = 0;
      }
    }
  }

  const directions = [
    [1, 0],
    [0, 1],
  ];
  let result = 0;
  function bfs(i, j) {
    if (map[i] && map[i][j]) {
      map[i][j] = 0;
      result++;
      for (const [di, dj] of directions) {
        bfs(i + di, j + dj);
      }
    }
    return result;
  }
  return bfs(0, 0);
};
