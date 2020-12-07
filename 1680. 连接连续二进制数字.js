/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  const MOD = BigInt(10 ** 9 + 7);
  let result = 0n;
  for (let i = 1n; i <= n; i++) {
    const binStr = i.toString(2);
    result = ((result << BigInt(binStr.length)) + i) % MOD;
  }
  return result;
};
