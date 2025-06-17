// This script defines a function that calculates how many bottles of milk
// you can buy with a given amount of money.

// Math.floor() is used to round down to the nearest whole number.

function getMilk(money) {
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("Buy " + numberOfBottles + " bottles of milk");
}

// Call the function with an input value
getMilk(5);