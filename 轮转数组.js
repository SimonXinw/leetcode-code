/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, num) {
  let k = num % nums.length;

  const arr = [];

  for (let i = nums.length - k; i < nums.length; i++) {
    arr.push(nums[i]);
  }

  for (let i = 0; i < nums.length - k; i++) {
    arr.push(nums[i]);
  }

  return arr;
};