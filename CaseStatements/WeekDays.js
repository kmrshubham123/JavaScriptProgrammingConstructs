//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let readline = require("readline-sync");
// Display Question text on the screen.
let number = readline.question("Enter the Number between 1 to 7: ");
//return int value
let day=parseInt(number);
switch(day)
{
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid Entry, Enter 1-7")
}

