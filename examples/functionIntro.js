// This script introduces the concept of functions in JavaScript.

// A function allows you to group a series of instructions,
// wrap them into a single block of code, and give that block a name.

// This helps keep your code DRY (Don't Repeat Yourself),
// avoids repetition, and saves typing.

function getMilk() {
  // All instructions between the curly braces { } form the function body.
  // This block will be executed only when the function is called.
  console.log("Buy milk");
  console.log("Pay at the counter");
  console.log("Bring the milk home");
}

// Call the function by using its name followed by parentheses:
getMilk();