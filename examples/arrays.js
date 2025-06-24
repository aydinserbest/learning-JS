
/*

we can store a collection of related items into the same container or he same variable
array is a collection of items that are related to each other

syntax:
var arrayName = [item1, item2, item3, ...];

if we try to retrieve a piece of data from this array, 
then we can simply use the name of the array and 
the index of the item we want to retrieve (specify the position of data in the array)
by using square brackets
arrayName[index];

computers always start counting from 0,
so the first item in the array is at index 0,
the second item is at index 1, and so on.
if we try to access an index that is out of bounds,
we will get an error or undefined value.

// Example of an array in JavaScript

*/
var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry
console.log(fruits[3]); // date
console.log(fruits[4]); // elderberry
console.log(fruits[5]); // undefined (out of bounds)

//and we can store the item that we want to retrieve in a variable

var myFruit = fruits[1];
console.log(myFruit); // banana
var index = 2;
console.log(fruits[index]); // cherry

//we can use arrayName.length to get the number of items in the array
console.log(fruits.length); // 5. it starts from 1, not 0

// Note: .length is a property, not a function, so no parentheses are used

console.log(fruits[fruits.length - 1]); // elderberry (last item in the array)

//we can print the entire array
console.log(fruits);

//include() function checks if an item is in the array
//we get a boolean value (true or false)
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("kiwi")); // false

var guestList = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
guestList.push("Frank"); // add a new item to the end of the array
console.log(guestList); // ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]

guestList.pop(); // remove the last item from the array
console.log(guestList); // ["Alice", "Bob", "Charlie", "Diana", "Eve"]

guestList.unshift("Grace"); // add a new item to the beginning of the array
console.log(guestList); // ["Grace", "Alice", "Bob", "Charlie", "Diana", "Eve"]
guestList.shift(); // remove the first item from the array
console.log(guestList); // ["Alice", "Bob", "Charlie", "Diana", "Eve"] 


var newAarry = [];
newAarry.push("item1");
console.log(newAarry); // ["item1"]
//.push() adds a new item to the end of the array
//it does not push it randomly, it always adds it to the end
newAarry.push("item2");
console.log(newAarry); // ["item1", "item2"]
newAarry.push("item3");
console.log(newAarry); // ["item1", "item2", "item3"]


