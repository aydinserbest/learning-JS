
var guestList = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
// Prompt the user to enter a name
var name = prompt("Please enter your name:");
// Check if the name is in the guest list
if (guestList.includes(guestName)) {
    // If the name is found, alert a welcome message
    alert("Welcome " + guestName + "!");
}
else {
    // If the name is not found, alert a message that the user is not on the list
    alert("Sorry, " + guestName + ", you are not on the guest list.");
}
// Note: This code uses prompt and alert, which are typically used in browser environments.
// In a Node.js environment, you would use a different method to get user input and display output.
// For example, in Node.js, you might use the readline module to get input from the command line.
// This code is a simple demonstration of how to use arrays with user input in JavaScript.
// It checks if a user-provided name is in a predefined guest list and responds accordingly.
// This is a basic example of how to work with arrays, user input, and conditional statements
// in JavaScript. It can be expanded or modified to suit more complex applications or user interactions
// in web applications.
// Remember that prompt and alert are not available in all JavaScript environments,
// such as Node.js. They are primarily used in web browsers.
// If you want to run this code in a Node.js environment, you would need to use
// a different method for user input and output, such as the readline module.
// 