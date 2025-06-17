// This script defines a function to capitalize the first letter of a name
// and makes sure the rest is in lowercase.

// Define the capitalize function
function capitalize(name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
}

// Prompt the user for their name
var name = prompt("What is your name?");

// Call the function and reassign the returned value
// Note: If you don't reassign it, the original 'name' variable remains unchanged
name = capitalize(name);

// Greet the user using the formatted name
alert("Hello, " + name);