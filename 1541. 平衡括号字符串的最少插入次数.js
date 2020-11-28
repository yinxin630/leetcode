/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let result = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      if (left) {
        left--;
      } else {
        result++;
      }
      if (s[i + 1] === ')') {
        i++;
      } else {
        result++;
      }
    }
  }
  return result + left * 2;
};
