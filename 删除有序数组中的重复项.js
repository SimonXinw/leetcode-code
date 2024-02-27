/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;

  if (len === 0) return 0;

  let fast = 1;

  let slow = 1;

  while (fast < len) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];

      slow++;
    }

    fast++;
  }

  return slow;
};
