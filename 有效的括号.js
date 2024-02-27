/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length) return false;

  if (s.length % 2 !== 0) return false;

  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const kuohaos = ["(", "[", "{"];

  const stack = ["?"];

  const len = s.length;

  for (let item of s) {
    if (kuohaos.includes(item)) {
      stack.push(item);
    } else {
      const top = stack.pop();

      if (map[top] !== item) {
        return false;
      }
    }
  }

  return stack.length === 1;
};
