/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const sum = (numbers) => numbers.reduce((result, current) => (result += current), 0);
  return Math.max(...accounts.map(sum));
};
