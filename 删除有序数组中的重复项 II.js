/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  // 出现的次数
  let times = 1;

  // 动态坐标
  let dynamicIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    // 有序数组，如果不相等的话就移动
    if (nums[i] !== nums[dynamicIndex]) {
      times = 1;
      dynamicIndex = i;
    } else {
      if (times === 2) {
        // 如果相等
        nums.splice(i, 1);
        i--;
      } else {
        //如果不等
        times++;
      }
    }
  }

  return nums.length;
};
