/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    const fits = restaurants.filter(r => {
        return (veganFriendly === 0 || r[2] === veganFriendly) && r[3] <= maxPrice && r[4] <= maxDistance;
    })

    fits.sort((a, b) => {
        if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else {
            return b[0] - a[0];
        }
    });

    return fits.map(r => r[0]);
};
