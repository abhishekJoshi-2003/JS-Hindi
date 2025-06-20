// Array Specific Loops
// forof loop works for the array , string and map but does not work for object
// ["","",""]
// [{},{},{}]

// 1) for of
// for (const element of object) { here element denotes the member element of the entity
    
// }

// Array
let arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(`The number is ${num}`);
}

// String
let greetings = "Hello Joshi!"
for (const greet of greetings) {
    // console.log(`The greeting is ${greet}`);
}

// Map
// Map has key value pairs which holds the unique keys and their values
// Map remembers the order of insertion of elements

let myMap = new Map();
myMap.set("IN","India");
myMap.set("US","America");
myMap.set("UK","Britain");
myMap.set("PK","Pakistan");
myMap.set("FR","France");

// console.log(myMap);

// here pair means key-value pair
for (const pair of myMap) {
    // console.log(pair);
}

// Here we can destructure the pair
for (const [key,value] of myMap) {  
    console.log(`The Value for ${key} is ${value}`);
}

// forof does not work for object
let myObj = {
    game1: "BGMI",
    game2: "PUBG"
}

// for (const key of myObj) {
//     console.log(key);
// }