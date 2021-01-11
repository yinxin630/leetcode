/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const map = {};
  const result = [];
  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    if (map[c] === undefined) {
      result.push(1);
      map[c] = i;
    } else {
      let diff = i - map[c];
      let newVal = 0;
      while (diff > 0) {
        const val = result.pop();
        newVal += val;
        diff -= val;
      }
      result.push(newVal + 1);
    }
  }
  return result;
};
