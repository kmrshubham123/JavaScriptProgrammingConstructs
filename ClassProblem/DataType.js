var val;
let datatype = typeof val;

var val=0;
let datatype1= typeof val;

var val=10n;
let datatype2= typeof val;

var val=true;
let datatype3= typeof val;

var val="foo";
let datatype4= typeof val;

let datatype5=typeof Symbol("id")

let datatype9=typeof "Kumar";

let datatype6=typeof Math;

var datatype7=typeof null;

let SayHi = function()
{
console.log.apply("Say Hi");
};

let datatype8= typeof SayHi;
console.log(datatype8);


