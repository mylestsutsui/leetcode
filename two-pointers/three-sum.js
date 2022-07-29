// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and 
// j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a, b) => a -b);
    const output = [];
    let start = 0, middle = start + 1, end = nums.length - 1;
    while(start <= nums.length - 3) {
        if(nums[start] > 0) return output;
        while(middle < end) {
            if(nums[start] + nums[middle] + nums[end] === 0) {
                output.push([nums[start], nums[middle], nums[end]]);
                while(nums[--end] === nums[end + 1]) {}
                while(nums[++middle] === nums[middle - 1]) {}
            } else if(nums[start] + nums[middle] + nums[end] > 0) {
             end--;
            } else {
                middle++;
            }
        }
        
        while(nums[++start] === nums[start - 1]) {}
        middle = start + 1;
        end = nums.length - 1;
    }
    return output;
};