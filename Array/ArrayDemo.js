//Creating Multiple Array
let origDogs = ["Bulldog", "Beagle", "Labrador"];
console.log(origDogs);
let cats = ["Americal", "Curl", "Bengal"];
let birds = ["Falcons", "Ducks", "Flamingoes"];

//Array Copy Elements
let slicedDogs = origDogs.slice(1,2); //Slice method returns selected element in array(1=index 1[Beagle], 2=index3-1[Beagle])
let copyDogs = [...origDogs,"Pomeranian"]; // ... (spread) => contains all element of origDogs
console.log(copyDogs);
let dogs = origDogs.slice(0);

//Stack Functions (LIFO) push and pop
let pushDog = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs [dogs.length] = "Poodle";

//Add and Remove from First
let addFirst = dogs.unshift("Golden Retriver");
let  shiftDog = dogs.shift();

//Atomic add and removes elements (where, how many to remove, +element list)
dogs.splice(2,1,"Pug","Boxer");

//Array Function - Concat, Slice and Sort
let animals = dogs.concat(cats,birds);
let newAnimal =  [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second]) { 
console.log("Scan: "+first + " " + second); 
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals) allAnimals += animal + " ";

console.log("Aniamls : " + allAnimals);
