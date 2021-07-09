//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let readline = require("readline-sync");
// Display Question text on the screen.
let value = readline.question("Enter a number in this from 1,10,100....: ");
let placeValue=parseInt(value)
switch(placeValue)
{
    case 1:
    console.log("Units");
    break;
    case 10:
    console.log("Tens");
    break;
    case 100:
    console.log("Hundreds");
    break;
    case 1000:
    console.log("Thousands");
    break;
    case 10000:
    console.log("Ten Thousands");
    break;
    case 100000:
    console.log("Lakh");
    break;
    case 1000000:
    console.log("Ten Lakh");
    break;
    case 10000000:
    console.log("Crore");
    break;
    default:
    console.log("please enter only numbers which are square of 10s upto Crores");
    break;
}
