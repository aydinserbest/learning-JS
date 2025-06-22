// This script defines a function to calculate Body Mass Index (BMI)
// using the formula: BMI = weight / height²

function bmiCalculator(weight, height) {
  // Use Math.pow for squaring the height
  return Math.round(weight / Math.pow(height, 2));
}

// Call the function with sample values
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);


/*
✏️ Why do we use Math.round()?

The BMI formula (weight / (height * height) or weight / Math.pow(height, 2)) produces a decimal number.

For example:

70 / (1.73 * 1.73) = 23.3889617...

But we want to round it to the nearest whole number. That’s exactly why we use Math.round().

Math.round():
✅ Rounds a number to the nearest integer.

Math.round(23.3889) → 23
Math.round(23.6785) → 24

⸻

✏️ Why do we use Math.pow()?

We need to square the height (multiply the height by itself).

There are two ways to do this:
	•	Write height * height directly.
	•	Or use Math.pow(height, 2) for a more mathematical style.

Math.pow(a, b):
✅ Raises a to the power of b.

Math.pow(1.73, 2) → 1.73 * 1.73

With Math.pow(a, b), you can put any number for b.

For example:
	•	Math.pow(1.73, 2) → 1.73 * 1.73
	•	Math.pow(1.73, 3) → 1.73 * 1.73 * 1.73
	•	Math.pow(1.73, 4) → 1.73 * 1.73 * 1.73 * 1.73

The second parameter (b) is the exponent — it tells JavaScript how many times to multiply the base (a) by itself.

If you write 3, it means the cube of 1.73.

🎯 Example:
Math.pow(2, 3); // 2 * 2 * 2 = 8
Math.pow(2, 4); // 2 * 2 * 2 * 2 = 16

⸻

🎯 Summary:
	•	Math.round() → Rounds the number to the nearest integer.
	•	Math.pow(height, 2) → Squares the height.

💡 Alternatively, you could simply do:

var bmi = Math.round(weight / (height * height));

Both approaches produce the same result — using Math.pow() can look more “mathematical,” while height * height is quicker to read. It’s up to you which one you prefer! ✨

Would you also like me to give a few examples with different numbers?
*/
//Note: to run this code in terminal, you can use:
     //node examples/bmiCalculator.js