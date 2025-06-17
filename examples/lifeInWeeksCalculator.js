// This script calculates how many days, weeks, and months
// a person has left if they live until age 90.

function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

// Example call
lifeInWeeks(40);