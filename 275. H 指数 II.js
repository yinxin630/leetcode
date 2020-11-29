/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let i = 0;
  let j = citations.length - 1;
  while (i <= j) {
    const mid = (i + j) >> 1;
    if (citations[mid] === citations.length - mid) {
      return citations.length - mid;
    } else if (citations[mid] < citations.length - mid) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return citations.length - i;
};
