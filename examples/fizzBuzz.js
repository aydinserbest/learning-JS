
// FizzBuzz problem
// Print numbers from 1 to 100
// If the number is divisible by 3, print "Fizz"
// If the number is divisible by 5, print "Buzz"
// If the number is divisible by both 3 and 5, print "FizzBuzz"
for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}
// This code iterates through numbers 1 to 100 and checks each number for divisibility
// by 3 and 5. It prints "Fizz" for multiples of 3,
// "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.
// If a number is not divisible by either, it simply prints the number itself.
// This is a common coding challenge used to test basic programming skills and understanding of control flow.
// The code uses a for loop to iterate through the numbers,
// and conditional statements (if-else) to determine what to print for each number.
// The output will be a mix of numbers and the strings "Fizz", "Buzz", or "FizzBuzz" based on the conditions specified.
// This is a simple yet effective way to demonstrate the use of loops and conditionals in JavaScript.

const fizzBuzzArray = [];
let count = 1;

function fizzBuzz() {
while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
        fizzBuzzArray.push("FizzBuzz");
    } else if (count % 3 === 0) {
        fizzBuzzArray.push("Fizz");
    } else if (count % 5 === 0) {
        fizzBuzzArray.push("Buzz");
    } else {
        fizzBuzzArray.push(count);
    }
    count++;
    //console.log(fizzBuzzArray);
    console.log(JSON.stringify(fizzBuzzArray));
   //console.log([...fizzBuzzArray]);
}
}
fizzBuzz();

// This code uses a while loop to achieve the same FizzBuzz functionality.
// It initializes an empty array `fizzBuzzArray` and a counter `count` starting
// from 1. The loop continues until `count` exceeds 100.
// Inside the loop, it checks the same conditions as before and pushes the appropriate
// value ("Fizz", "Buzz", "FizzBuzz", or the number itself) into the `fizzBuzzArray`.
// After the loop completes, it prints the entire array containing the results
// of the FizzBuzz challenge.
