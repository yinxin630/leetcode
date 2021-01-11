/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.map[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let result = 0;
  for (const key of Object.keys(this.map)) {
    if (key.startsWith(prefix)) {
      result += this.map[key];
    }
  }
  return result;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
