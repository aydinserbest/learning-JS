// This script asks the user for their dog's age
// and keeps asking until a valid number is entered.
// Then it calculates and displays the equivalent human age.

var dogAge = NaN; // Start with an invalid value

// Keep prompting until the input is a valid number
while (isNaN(dogAge)) {
  var input = prompt("How old is your dog?");
  dogAge = Number(input);

  if (isNaN(dogAge)) {
    alert("❌ Please enter a valid number!");
  }
}

// At this point, dogAge is a valid number
var humanAge = ((dogAge - 2) * 4) + 21;
alert("🐶 Your dog's age in human years: " + humanAge);