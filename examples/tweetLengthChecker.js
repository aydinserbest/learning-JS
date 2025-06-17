// This script prompts the user to write a tweet and shows how many characters they used
// and how many characters they have left (assuming a 140-character limit).

var tweet = prompt("Compose your tweet:");
alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");