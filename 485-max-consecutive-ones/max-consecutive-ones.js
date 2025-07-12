/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let count1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        } else if (nums[i] !== 1) {
            count1 = Math.max(count1, count);
            count = 0;
    }
  }
  return Math.max(count1, count);
};