/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = [];
  let cur = [];
  for (let i = 0; i <= s.length; i++) {
    if (i === 0) {
      cur[0] = i;
    } else if (i === s.length || s[i] !== s[i - 1]) {
      cur[1] = i - 1;
    }
    if (cur[1] !== undefined) {
      if (cur[1] - cur[0] >= 2) {
        result.push(cur);
      }
      cur = [i];
    }
  }
  return result;
};
