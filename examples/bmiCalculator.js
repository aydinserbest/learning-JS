// This script defines a function to calculate Body Mass Index (BMI)
// using the formula: BMI = weight / height²

function bmiCalculator(weight, height) {
  // Use Math.pow for squaring the height
  return Math.round(weight / Math.pow(height, 2));
}

// Call the function with sample values
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);


//Note: to run this code in terminal, you can use:
     //node examples/bmiCalculator.js