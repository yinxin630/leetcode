
var UndergroundSystem = function() {
    this.in = new Map();
    this.check = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.in.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [a, b] = this.in.get(id);
    const key = a + ':' + stationName;
    const check = this.check.get(key);
    if (check) {
        this.check.set(key, [t - b + check[0], 1 + check[1]]);
    } else {
        this.check.set(key, [t - b, 1]);
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = startStation + ':' + endStation;
    const check = this.check.get(key);
    if (!check) {
        return 0;
    } else {
        return check[0] / check[1];
    }
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */