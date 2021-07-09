//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let readline = require("readline-sync");
// Display Question text on the screen.
let placeValue = readline.question("Enter a number in this from 1,10,100....: ");
if (placeValue == 1) 
console.log("Units");
else if (placeValue == 10) 
console.log("Tens");
else if (placeValue == 100) 
 console.log("Hundreds");
else if (placeValue == 1000) 
console.log("Thousands");
else if (placeValue == 10000) 
console.log("Ten Thousands");
else if (placeValue == 100000) 
console.log("Lakhs");
else if (placeValue == 1000000) 
console.log("Ten Lakhs");
else if (placeValue == 10000000) 
console.log("Crores");
else if (placeValue == 100000000) 
console.log("Ten Crores");
else 
console.log("please enter only numbers which are square of 10s upto Ten Crores");