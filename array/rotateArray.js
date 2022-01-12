function rotate1(k, nums) {
    while (k > 0) {
        nums.unshift(nums.pop());
        k--;
    }
}

function rotate2(k, nums) {
    let start = nums.length - k;

    if (start >= 0) {
        nums.unshift(...nums.splice(start, nums.length));
    } else {
        rotate1(k, nums)
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function (nums, k) {
    rotate2(k, nums);
};

rotate([1, 2], 3)


