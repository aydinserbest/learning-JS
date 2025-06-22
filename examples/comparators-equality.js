
var a = 1;
var b = '1';
//they have the same value but different types
console.log(typeof a); // "number"
console.log(typeof b); // "string"
console.log(a == b);  // true, because of type coercion
console.log(a === b); // false, because they are of different types

if (a == b) {
    console.log('a is equal to b'); 
} else {
    console.log('a is not equal to b'); // this will be executed
}
/*
three equal signs (===) checks for both value and type - data type matching is required
two equal signs (==) checks for value only, data type matching is not required, allowing type coercion
it doesn't care about data types
*/

/*

=== is equal to
"!== is not equal to
=== is strictly equal to (type and value)
!== is strictly not equal to (type and value)
== is equal to (type coercion allowed)
!= is not equal to (type coercion allowed)

instead of using === , if you use ==, it will convert the types to the same type before comparing
=== is preferred over == because it avoids type coercion and potential bugs
=== is used to compare values and types


*/