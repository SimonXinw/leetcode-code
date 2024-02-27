/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 || j >= 0) {
    if (j < 0) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else if (i < 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    } else if (nums2[j] > nums1[i]) {
      // 如果第二个数组大于第一个数组值
      nums1[k] = nums2[j];
      j--;
      k--;
    } else {
      // 第二个数组小于第一个数字
      nums1[k] = nums1[i];
      i--;
      k--;
    }
  }

  return nums1;
};

merge([], 0, [1], 1);
