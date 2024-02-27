/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let total = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = Math.max(0, prices[i] - prices[i - 1]);

    total += profit;
  }

  return total;
};
