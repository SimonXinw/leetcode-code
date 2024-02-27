/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const list = list1.concat(list2);

  const len = list.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (list[j] > list[j + 1]) {
        const big = list[j];

        list[j] = list[j + 1];

        list[j + 1] = big;
      }
    }
  }

  return list;
};
