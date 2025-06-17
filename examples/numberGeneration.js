var n = Math.random();
//.random() generates a floating-point, pseudo-random number in the range from 0 (inclusive) to 1 (exclusive).
console.log(n); // Outputs a random number between 0 and 1
n = n * 6; // Outputs a random number between 0 and 6
console.log(n); 
n = Math.floor(n); // Outputs a random integer between 0 and 5
// Math.floor() rounds down to the nearest whole number
console.log(n); 

//If you want to generate a number between 1 and 6 like a die, you need to add +1

var n = Math.floor(Math.random() * 6) + 1;
console.log(n); // Random integer between 1 and 6


/*

n = Math.floor(n); // Outputs a random integer between 0 and 5

Because:
	•	0 ≤ n < 6 was a decimal number
	•	With Math.floor(), all values less than 6 are rounded down:
	•	0.1 → 0
	•	1.9 → 1
	•	5.9999 → 5

This results in generating one of six different integers: 0, 1, 2, 3, 4, or 5.
*/
/*

Quick breakdown:
	•	Math.random() → 0 ≤ n < 1
	•	*6 → 0 ≤ n < 6
	•	Math.floor() → 0, 1, 2, 3, 4, 5
	•	+1 → ✅ 1, 2, 3, 4, 5, 6 → a perfect die roll 
*/