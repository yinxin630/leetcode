
var ProductOfNumbers = function() {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.nums.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (this.nums.length === 0) {
        return 0;
    }
    let result = this.nums[this.nums.length - 1];
    while (k > 1) {
        result *= this.nums[this.nums.length - k];
        k--;
    }
    return result;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */