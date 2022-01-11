/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 *
 */
let removeDuplicates = function (nums) {
    let index = 1;

    while (index < nums.length) {
        if (nums[index - 1] === nums[index]) {
            nums.splice(index, 1)
        } else {
            index++;
        }
    }

    return nums.length;
};

// Runtime 143ms
let removeDuplicatesEnhanced = function (nums) {
    let startIndex = 0;
    let index = 0;

    while (index < nums.length) {
        if (nums[index] === nums[index + 1]) {
            index++;
        } else {
            let delCount = index - startIndex;

            if (delCount > 0) {
                nums.splice(startIndex, delCount);
                index -= delCount;
                startIndex = index;
            } else {
                index++;
                startIndex = index;
            }

        }
    }
};

removeDuplicatesEnhanced([-4, -2, -2, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
