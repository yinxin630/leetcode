/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    if (rating < 3) {
        return 0;
    }
    let dp1 = new Array(3);
    for (let i = 0; i < 3; i++) {
        dp1[i] = [];
        for (let j = 0; j < rating.length; j++) {
            if (i === 0) {
                dp1[i][j] = 1;
            } else {
                dp1[i][j] = 0;
                for (let k = 0; k < j; k++) {
                    if (rating[j] > rating[k]) {
                        dp1[i][j] += dp1[i - 1][k];
                    }
                }
            }
        }
    }

    let dp2 = new Array(3);
    for (let i = 0; i < 3; i++) {
        dp2[i] = [];
        for (let j = 0; j < rating.length; j++) {
            if (i === 0) {
                dp2[i][j] = 1;
            } else {
                dp2[i][j] = 0;
                for (let k = 0; k < j; k++) {
                    if (rating[j] < rating[k]) {
                        dp2[i][j] += dp2[i - 1][k];
                    }
                }
            }
        }
    }

    let result = 0;
    for (let i = 0; i < rating.length; i++) {
        result += dp1[2][i] + dp2[2][i];
    }
    return result;
};
