function isLeapYear(year) {
  if (typeof year !== 'number' || year < 0) {
    throw new Error('Input must be a non-negative number');
  }
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
isLeapYear(2020); // true
isLeapYear(2021); // false
isLeapYear(1700); // false

/*

For a leap year, one of the following must be true:
	•	It must be divisible by 4 and at the same time not divisible by 100
OR
	•	It must be divisible by 400

⸻

Short-circuit behavior of operators (|| and &&):

In JavaScript, the || (OR) operator works with short-circuit logic:
	•	If the left-hand side of || is true, the right-hand side is not evaluated at all.
	•	If the left-hand side of || is false, then the right-hand side is checked.

Similarly for && (AND):
	•	If the left-hand side of && is false, the right-hand side is not evaluated.
*/

/*
other version:

if (year % 4 !== 0) {
  Not leap year
} else {           // --> yıl 4'e bölünüyorsa buradayız
  if (year % 100 === 0) {  // --> yıl 100'e bölünüyorsa
    if (year % 400 === 0) {
      Leap year
    } else {
      Not leap year
    }
  } else {
    Leap year
  }
}
*/