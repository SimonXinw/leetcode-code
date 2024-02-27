/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const arrRaw = String(x).split("");

  const arrRawLen = arrRaw.length;

  let positiveOrder = "";

  for (let i = 0; i < arrRawLen; i++) {
    positiveOrder += arrRaw[i];
  }

  let reverseOrder = "";

  for (let i = arrRaw.length - 1; i >= 0; i--) {
    reverseOrder += arrRaw[i];
  }

  return positiveOrder === reverseOrder;
};