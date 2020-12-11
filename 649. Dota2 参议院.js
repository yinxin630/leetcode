/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const r = [];
  const d = [];
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      r.push(i);
    } else {
      d.push(i);
    }
  }
  while (r.length && d.length) {
    if (r[0] < d[0]) {
      r.push(r[0] + senate.length);
    } else {
      d.push(d[0] + senate.length);
    }
    r.shift();
    d.shift();
  }
  return r.length ? 'Radiant' : 'Dire';
};

console.log(predictPartyVictory("RDD"));