/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if (tomatoSlices % 2 !== 0) {
    return [];
  }
  const maxJumbo = Math.floor(tomatoSlices / 4);
  const maxSmall = Math.floor(tomatoSlices / 2);
  if (cheeseSlices > maxSmall || cheeseSlices < maxJumbo) {
    return [];
  }
  return [maxSmall - cheeseSlices, Math.floor((tomatoSlices - (maxSmall - cheeseSlices) * 4) / 2)];
};
