/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let halfLen = Math.floor(nums.length / 2);

  let temporary = 0;

  nums.forEach((item_i, i) => {
    let temporaryItem = item_i;
    let temporaryItemTimes = 0;
    nums.forEach((item_j, j) => {
      if (item_j === temporaryItem) {
        temporaryItemTimes++;
      }
    });

    if (temporaryItemTimes > halfLen) {
      temporary = temporaryItem;

      return;
    }
  });

  return temporary;
};
