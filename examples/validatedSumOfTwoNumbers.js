// This script asks the user for two valid numbers,
// and calculates their sum after validating both inputs.

var number1 = NaN;
while (isNaN(number1)) {
  var input1 = prompt("Enter the first number:");
  number1 = Number(input1);
  if (isNaN(number1)) {
    alert("❌ Please enter a valid number!");
  }
}

var number2 = NaN;
while (isNaN(number2)) {
  var input2 = prompt("Enter the second number:");
  number2 = Number(input2);
  if (isNaN(number2)) {
    alert("❌ Please enter a valid number!");
  }
}

// Add the two numbers and show the result
var sum = number1 + number2;
alert("✅ Result: " + number1 + " + " + number2 + " = " + sum);