// This script calculates how many bottles of milk can be bought
// and how much change is left, returning the result as an object.

function getNumberOfBottles(money, costPerBottle) {
  return Math.floor(money / costPerBottle);
}

function calculateChange(money, costPerBottle) {
  return money % costPerBottle;
}

// Combines the logic and returns an object containing both values
function getMilk(money, costPerBottle) {
  const bottles = getNumberOfBottles(money, costPerBottle);
  const change = calculateChange(money, costPerBottle);

  return {
    bottles: bottles,
    change: change
  };
}

// Call the function and capture the result object
const result = getMilk(20, 3);

// Output the result
console.log("You buy " + result.bottles + " bottles of milk, and " + result.change + " euros as change.");