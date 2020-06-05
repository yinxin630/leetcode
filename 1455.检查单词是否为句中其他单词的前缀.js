/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const i =  sentence.split(' ').findIndex(x => x.startsWith(searchWord));
    return i === -1 ? -1 : i + 1;
};