var TweetCounts = function() {
    this.map = {};
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
    const map = this.map;
    map[tweetName] = map[tweetName] || [];
    map[tweetName].push(time);
    for (let i = map[tweetName].length - 1; i > 0; i--) {
        if (map[tweetName][i] < map[tweetName][i - 1]) {
            const t = map[tweetName][i];
            map[tweetName][i] = map[tweetName][i - 1];
            map[tweetName][i - 1] = t;
        }
    }
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
    const map = this.map;
    const times = map[tweetName] || [];

    let f = 60;
    if (freq === 'hour') {
        f = 60 * 60;
    } else if (freq === 'day') {
        f = 60 * 60 * 24;
    }

    const start = 0;
    const end = Math.ceil((endTime + 1 - startTime) / f);
    const result = new Array(end - start).fill(0);
    for (const time of times) {
        if (time < startTime) {
            continue;
        } else if (time > endTime) {
            break;
        } else {
            const bucket = Math.floor((time - startTime) / f);
            result[bucket]++;
        }
    }

    return result;
};
