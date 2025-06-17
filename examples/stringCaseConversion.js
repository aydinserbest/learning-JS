// This script demonstrates how to convert a string to uppercase and lowercase using string methods.

var name = "Angela";

// Convert the string to uppercase (but not saved yet)
name.toUpperCase(); // This returns "ANGELA" but doesn't change the original variable

// The original variable is still unchanged
console.log(name); // → "Angela"

// To update the variable, reassign the result
name = name.toUpperCase(); // name is now "ANGELA"

// Convert it back to lowercase
name = name.toLowerCase(); // name is now "angela"