//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let readline =  require('readline-sync');
console.log("Check Year is Leap or Non-Leap Year");
// Display Question text on the screen.
let year = readline.question("Enter year: ");
if(( year % 4 == 0 && year % 100 !=0 || year % 400 == 0))
console.log("Leap year");
else
console.log("Non-Leap year");