/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let result = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n += (n & 2) == 0 || n == 3 ? -1 : 1;
    }
    result++;
  }
  return result;
};
