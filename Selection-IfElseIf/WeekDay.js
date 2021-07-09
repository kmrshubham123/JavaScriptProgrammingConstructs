//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let readline = require("readline-sync");
// Display Question text on the screen.
let number = readline.question("Enter the Number between 1 to 7: ");
if (number == 1) 
console.log("Monday");
else if (number == 2) 
console.log("Tuesday");
else if (number == 3) 
console.log("Wednesday");
else if (number == 4) 
console.log("Thrusday");
else if (number == 5)
console.log("Friday");
else if (number == 6) 
console.log("Saturday");
else if (number == 7) 
console.log("Sunday");
else
console.log("please enter only  the number between 1 to 7");