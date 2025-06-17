// This script converts a dog's age to human years using a common formula:
// humanAge = ((dogAge - 2) * 4) + 21

var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years.");

// -----------------------------
// Alternative: Safer version with input validation

// Convert string input to number explicitly
dogAge = Number(dogAge);

if (isNaN(dogAge)) {
  alert("Please enter a valid number!");
} else {
  var humanAgeSafe = ((dogAge - 2) * 4) + 21;
  alert("Your dog is " + humanAgeSafe + " years old in human years.");
}