// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero 
// elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let start = 0, end = nums.length - 1;
    while(start <= end) {
        if(nums[start] === 0) {
            nums.push(nums.splice(start, 1))
            end--;
        } else start++;
    }
    return nums;
};