// This script calculates how many bottles of milk can be bought with a given amount of money,
// and how much change will be left over.

// Returns the number of bottles based on available money and cost per bottle
function numberOfBottles(money, cost) {
  return Math.floor(money / cost);
}

// Calculates and logs the number of bottles and remaining change
function getChange(money) {
  var costPerBottle = 1.5;
  var bottles = numberOfBottles(money, costPerBottle);
  var change = money % costPerBottle;

  console.log("You can get " + bottles + " bottles of milk.");
  console.log("You will get " + change + " euros in change.");

  return change;
}

// Capture the returned change value
var change = getChange(7);

// Log the change again if needed
console.log("Final change: " + change + " euros.");