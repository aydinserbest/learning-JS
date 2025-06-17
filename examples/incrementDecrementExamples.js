// This script demonstrates increment, decrement, and compound assignment operations in JavaScript.

var x = 5;

// Instead of writing: x = x + 1;
x++; // Increments x by 1
x--; // Decrements x by 1

// Equivalent with explicit assignment:
x += 2; // Increases x by 2
// Equivalent to: x = x + 2

// Using a second variable
var y = 5;
var z = 3;
y += z; // Adds z to y

// Compound assignment also works with other operators:
// -= , *= , /=

var a = 3;
var b = a++; // Post-increment

// Explanation:
// b = a (which is 3), then a becomes 4
// Now: b = 3, a = 4

b += 1; // b becomes 4