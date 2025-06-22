var firstName = prompt("What is the first name?");
var secondName = prompt("What is the second name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // Ensure the score is between 1 and 100

if (loveScore === 100) {
    alert("Your love score is " + loveScore + " %. " + "You go together like peanut butter and jelly!");
}
else {
    alert("Your love score is " + loveScore + " %. " + "You go together like oil and water.");
}

/*
if (loveScore > 70) {
    alert("Your love score is " + loveScore + " % " + "You go together like peanut butter and jelly!");
}
else {
    alert("Your love score is " + loveScore + " % " + "You go together like oil and water.");
}
*/

