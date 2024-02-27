/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strArr) {
  let sameStr = "";

  const len = strArr.length;

  const firstStrLen = strArr[0].length;

  let firstStr = strArr[0];

  let singleStr = "";

  for (let i = 0; i < firstStrLen; i++) {
    singleStr = firstStr[i];

    for (let j = 0; j < len; j++) {
      if (singleStr !== strArr[j][i]) {
        return sameStr;
      }
    }

    sameStr += singleStr;
  }

  return sameStr;
};
