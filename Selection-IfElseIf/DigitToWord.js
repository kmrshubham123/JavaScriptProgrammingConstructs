//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let readline = require("readline-sync");
// Display Question text on the screen.
let numberSingleDigit = readline.question("Enter the Single Digit Number(0,9): ");
if (numberSingleDigit == 0) 
console.log("Zero");
else if (numberSingleDigit == 1) 
console.log("One");
else if (numberSingleDigit == 2) 
console.log("Two");
else if (numberSingleDigit == 3) 
console.log("Three");
else if (numberSingleDigit == 4) 
console.log("Four");
else if (numberSingleDigit == 5) 
console.log("Five");
else if (numberSingleDigit == 6) 
console.log("Six");
else if (numberSingleDigit == 7) 
console.log("Seven");
else if (numberSingleDigit == 8) 
console.log("Eight");
else if (numberSingleDigit == 9) 
console.log("Nine");
else
console.log("please enter single digit number");