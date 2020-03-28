/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    words.sort((a, b) => b.length - a.length);
    const map = new Map();
    for (const word of words) {
        const list = map.get(word[word.length - 1]) || [];
        let i = 0;
        while (i < list.length) {
            if (list[i].lastIndexOf(word) === list[i].length - word.length) {
                break;
            }
            i++;
        }
        if (i === list.length) {
            list.push(word);
            map.set(word[word.length - 1], list);
        }
    }
    let result = 0;
    for (const list of map.values()) {
        for (const word of list) {
            result += word.length + 1;
        }
    }
    return result;
};