// This script defines modular functions to calculate:
// 1. How many bottles of milk you can buy
// 2. How much change will be left over

function getNumberOfBottles(money, costPerBottle) {
  return Math.floor(money / costPerBottle);
}

function calculateChange(money, costPerBottle) {
  return money % costPerBottle;
}

// Placeholder function — currently not used meaningfully
function getMilk() {
  return calculateChange(); // No arguments passed → will return NaN
}

// Example usage
console.log(
  "You buy " + getNumberOfBottles(20, 3) + " bottles of milk, and " +
  calculateChange(20, 3) + " euros as change."
);