/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const map = {};
    let max = 0;
    for (let i = 0; i < deck.length; i++) {
        map[deck[i]] = map[deck[i]] || 0;
        map[deck[i]]++;
        max = Math.max(max, map[deck[i]]);
    }

    const countList = Object.values(map);
    for (let i = 2; i <= max; i++) {
        let j = 0;
        for (; j < countList.length; j++) {
            if (countList[j] % i !== 0) {
                break;
            }
        }
        if (j === countList.length) {
            return true;
        }
    }
    return false;
};