/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanStr = s;

  const romanStrLen = romanStr.length;

  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let total = romanMap[romanStr[romanStrLen - 1]];

  for (let i = romanStr.length - 1; i >= 1; i--) {
    // 左边数 & 右边数
    if (romanMap[romanStr[i - 1]] >= romanMap[romanStr[i]]) {
      total += romanMap[romanStr[i - 1]];
    } else {
      total -= romanMap[romanStr[i - 1]];
    }
  }

  return total;
};
