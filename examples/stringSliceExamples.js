// This script demonstrates how the .slice() method works on strings.

var name = "Angela";

// slice(start, end) extracts characters from index `start` up to (but not including) `end`
console.log(name.slice(0, 1)); // → "A" (first character)
console.log(name.slice(5, 6)); // → "a" (last character)
console.log(name.slice(0, 3)); // → "Ang"
console.log(name.slice(2, 4)); // → "ge"

// Notes:
// - Characters are indexed starting from 0
// - The second argument is excluded
// - The number of characters in the result = end - start

// Shortcut for trimming tweet to 140 characters:
alert(prompt("Compose your tweet:").slice(0, 140));

// Note:
// Variable names can't begin with a number, but they can include numbers (e.g., tweet140OK)