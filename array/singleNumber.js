/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
    let numTracker = [];

    nums.forEach(num => {
        if (numTracker.indexOf(num) >= 0) {
            numTracker.splice(numTracker.indexOf(num), 1)
        } else {
            numTracker.push(num)
        }
    })

    return numTracker[0];
};

console.log(singleNumber([2, 2, 1]));
