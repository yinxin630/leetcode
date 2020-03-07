var MaxQueue = function() {
    this.queue = [];
    this.max = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (this.max.length) {
        return this.max[0];
    } else {
        return -1;
    }
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value);
    while (this.max.length  >= 0 && this.max[this.max.length - 1] < value) {
        this.max.pop();
    }
    this.max.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (this.queue.length === 0) {
        return -1;
    }
    const value = this.queue.shift();
    if (value === this.max[0]) {
        this.max.shift();
    }
    return value;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */