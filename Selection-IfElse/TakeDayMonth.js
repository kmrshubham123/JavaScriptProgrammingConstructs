//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let readline =  require('readline-sync');
console.log("Select Date and Month in Between March 20 to June 20");
// Display Question text on the screen.
// Wait for the user to respond.
// Store the data in the variable info.
let date = readline.question("Enter Date (As Number): ");
let month = readline.question("Enter Month (As Number): ");
if(month>=3 && month <=6) 
if(month==3 && date <= 20 || month==6 && date >=20)
console.log("False");
else
console.log("True");
else
console.log("You are Not selecting Proper Date and Month , status is False");