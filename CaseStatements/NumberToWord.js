//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let readline = require("readline-sync");
// Display Question text on the screen.
let number = readline.question("Enter the Number between 0 to 9: ");
//return int value
let digit=parseInt(number);
switch(digit)
{
    case 0:
        console.log("ZERO");
        break;
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("Invalid Entry, Enter 0-9")
}
