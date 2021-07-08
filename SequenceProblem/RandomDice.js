//Generating Random Number of single digit *10(0 to 9)
let num_1=Math.floor(Math.random()*10);
console.log("Random Single Digit Number: "+num_1);
//Dice number between 1 to 6 (*6)+1=> 1 to 6
let Dice=Math.floor(Math.random()*6)+1;
console.log("Your Dice Number is: "+Dice);
//Generating Two Dice number(1,6)
let Dice_One=Math.floor(Math.random()*6)+1;
let Dice_Two=Math.floor(Math.random()*6)+1;
console.log("First Dice Number is: "+Dice_One+ " "+"And Second Dice Number is : "+Dice_Two);
//5 Random 2 digit number (*99)+10=>10 to 99 
let NumOne=Math.floor(Math.random()*99)+10;
let NumTwo=Math.floor(Math.random()*99)+10;
let NumThree=Math.floor(Math.random()*99)+10;
let NumFour=Math.floor(Math.random()*99)+10;
let NumFive=Math.floor(Math.random()*99)+10;
console.log("Five Random Two Digit Number are: "+NumOne+" "+NumTwo+" "+NumThree+" "+NumFour+" "+NumFive);