// This script takes a user's name input and formats it with the first letter capitalized.

// Prompt the user for their name
var userName = prompt("What is your name?");

// Extract the first character and convert it to uppercase
var firstChar = userName.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();

// Extract the rest of the name and convert it to lowercase
var restOfName = userName.slice(1, name.length);
restOfName = restOfName.toLowerCase();

// Concatenate to get the final formatted name
var capitalisedName = upperCaseFirstChar + restOfName;

// Greet the user using their capitalized name
alert("Hello, " + capitalisedName);