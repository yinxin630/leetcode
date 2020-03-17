/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    function getCode(str, i) {
        return str.charCodeAt(i) - 97;
    }

    const arr = new Array(26).fill(0);
    for (let i = 0; i < chars.length; i++) {
        arr[getCode(chars, i)]++;
    }

    let result = 0;
    for (let i = 0; i < words.length; i++) {
        let j = 0;
        while (j < words[i].length) {
            arr[getCode(words[i], j)]--;
            if (arr[getCode(words[i], j)] < 0) {
                break;
            }
            j++;
        }
        if (j === words[i].length) {
            result += words[i].length;
        }
        while (j >= 0) {
            arr[getCode(words[i], j)]++;
            j--;
        }
    }
    return result;
};

console.log(countCharacters(words = ["cat","bt","hat","tree"], chars = "atach"));