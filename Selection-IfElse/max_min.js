//let is type
//num_1,2,3,4,5 variable
//math.random used with math.floor,used to return random Integer
//(*Max-Min+1)+Min use for generate Random 3 digit Number (100-999)
let num_1=Math.floor(Math.random()*900)+100;
let num_2=Math.floor(Math.random()*900)+100;
let num_3=Math.floor(Math.random()*900)+100;
let num_4=Math.floor(Math.random()*900)+100;
let num_5=Math.floor(Math.random()*900)+100;
//To print Random Number
console.log("Random Three Digit Number: "+num_1+" "+num_2+" "+num_3+" "+num_4+" "+num_5);
//To Find Maximum Value
let Maximum_Number=Math.max(num_1,num_2,num_3,num_4,num_5);
//To Find Minimum Value
let Minimum_Number=Math.min(num_1,num_2,num_3,num_4,num_5);
console.log("Maximum Number: "+Maximum_Number+" "+"Minimum Number: "+Minimum_Number);