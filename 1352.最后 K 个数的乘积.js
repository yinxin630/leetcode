
var ProductOfNumbers = function() {
    this.results = [1];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        this.results = [1];
    } else {
        this.results.push(this.results[this.results.length - 1] * num);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (k >= this.results.length) {
        return 0;
    } else {
        return this.results[this.results.length - 1] / this.results[this.results.length - 1 - k];
    }
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

 // 1 2 6 24