
/*

&& AND 
|| OR
! NOT

*/
// Example: Combining Comparatives in JavaScript
// This example demonstrates how to combine multiple comparative conditions using logical operators.
// It checks if a number is within a specific range and if it is even.
var number = 10;
var lowerBound = 5;
var upperBound = 15;
if (number >= lowerBound && number <= upperBound && number % 2 === 0) {
    console.log(number + ' is within the range of ' + lowerBound + ' and ' + upperBound + ' and is even.');
}
else {
    console.log(number + ' does not meet the criteria.');
}
// Output: 10 is within the range of 5 and 15 and is even.
// Example: Love Calculator
// This example simulates a love calculator that calculates a love score based on two names.

var firstName = prompt("What is the first name?");
var secondName = prompt("What is the second name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // Ensure the score is between 1 and 100

if (loveScore > 70) {
    alert("Your love score is " + loveScore + " % " + "You love each other like Kanye and Kanye!");
}
else if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + " %.");

}
else {
    alert("Your love score is " + loveScore + " %.");
}

/*


🔍 What happens with if if if?

Your code:

if (loveScore > 70) {
    // ...
}
if (loveScore > 30 && loveScore <= 70) {
    // ...
}
if (loveScore <= 30) {
    // ...
}

✅ Logically, loveScore can only match one of these three conditions because they don’t overlap:
	•	> 70
	•	> 30 && <= 70
	•	<= 30

That means that in practice only one if will ever run.
So this is not wrong — it works fine.

⸻

🤔 Why do we usually use else if here?

Even though this works, using else if is often considered better practice when the conditions are mutually exclusive:

if (loveScore > 70) {
    // ...
} else if (loveScore > 30 && loveScore <= 70) {
    // ...
} else {
    // <= 30
}

✅ This way:
	•	It’s clear that you have a single “branching logic.”
	•	JavaScript will stop checking further conditions after one matches, which is a bit more efficient.

⸻

🎯 Best practice:

When your conditions are mutually exclusive — that is, only one branch should ever run — use else if / else.
That communicates your intent clearly to other developers and avoids unnecessary condition checks.

Your version works correctly, but else if would make it cleaner and more efficient. 🎉

*/