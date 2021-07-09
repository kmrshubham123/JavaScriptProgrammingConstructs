//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let readline = require("readline-sync");
// Display Question text on the screen.
let FirstNumber = readline.question("Enter a First Number: ");
let SecondNumber = readline.question("Enter a Second Number: ");
let ThirdNumber = readline.question("Enter a Third Number: ");
//converting
let x=parseFloat(FirstNumber);
let y=parseFloat(SecondNumber);
let z=parseFloat(ThirdNumber);
//Variables
let a=x+y*z;
console.log("FirstNumber+SecondNumber*ThirdNumber = "+a);
let b=z+x/y;
console.log("ThirdNumber+FirstNumber/SecondNumber = "+b);
let c=x%y+z;
console.log("FirstNumber%SecondNumber+ThirdNumber = "+c);
let d=x*y+z;
console.log("FirstNumber*SecondNumber+ThirdNumber = "+d);
//To Find Maximum Value
let Maximum_Number=Math.max(a,b,c,d);
//To Find Minimum Value
let Minimum_Number=Math.min(a,b,c,d);
console.log("Maximum Number: "+Maximum_Number+" "+"Minimum Number: "+Minimum_Number);





