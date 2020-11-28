/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] != b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  const result = [];
  for (const current of intervals) {
    if (result.length === 0) {
      result.push(current);
    } else {
      const last = result[result.length - 1];
      if (!(current[0] >= last[0] && current[1] <= last[1])) {
        result.push(current);
      }
    }
  }

  return result.length;
};
