/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = 999999999; // 初始设置为无穷大

  let profit = 0; // 最大利润初始值为0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      // 更新最小价格
      minPrice = prices[i];
    } else if (prices[i] - minPrice > profit) {
      // 如果当前价格与最小价格之间的差值大于当前最大利润，则更新最大利润
      profit = prices[i] - minPrice;
    }
  }

  return profit; // 返回最大利润
};

maxProfit([7,1,5,3,6,4])
