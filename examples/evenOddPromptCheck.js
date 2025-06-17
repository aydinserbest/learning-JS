// This script asks the user to input a number,
// converts the input from string to number,
// and checks if it's even or odd using the modulus operator (%).

// 1. Get input from the user (as a string)
var number = prompt("Enter a number:");
console.log("Raw input (string):", number);

// 2. Convert the string input to a number
number = Number(number);
console.log("Converted to number:", number);

// 3. Check if the number is even or odd
if (number % 2 === 0) {
  console.log("This number is even.");
  alert("Even");
} else {
  console.log("This number is odd.");
  alert("Odd");
}