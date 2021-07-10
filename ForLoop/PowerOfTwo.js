//pulls in all the functions that allow us to get data from the user and assigns them to the variable input.
let read = require('readline-sync')
var range = read.question('Enter a Range: ');
//creating a multiplication table
for(var i = 1; i <= range; i++)
{
    const range = Math.pow(2,i)
     // display the result
 console.log("Power of 2^"+i+" is "+range);
}