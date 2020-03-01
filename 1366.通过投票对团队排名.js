/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    if (votes.length === 1) {
        return votes[0];
    }

    let result = new Array(26);
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(26).fill(0);
    }
    for (let i = 0; i < votes.length; i++) {
        for (let j = 0; j < votes[i].length; j++) {
            const code = votes[i].charCodeAt(j) - 65;
            result[code][j]++;
        }
    }

    result = result.map((list, i) => ({ k: String.fromCharCode(i + 65), v: list }));
    result.sort((a, b) => {
        for (let i = 0; i < 26; i++) {
            if (a.v[i] != b.v[i]) {
                return b.v[i] - a.v[i];
            }
        }
        return a.k < b.k ? -1 : 1;
    });

    return result.map(({k}) => k).slice(0, votes[0].length).join('');
};
