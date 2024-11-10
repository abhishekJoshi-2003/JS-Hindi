// Primitive Data types
// 7 -> Number , String , Boolean , Symbol , null , undefined , BigInt

const val1 = 100 // Number
const val2 = 100.4 // Number
const val3 = "Joshi" // String
const val4 = true // Boolean
const val5 = Symbol('123') // Symbol
const val6 = Symbol('123') // Symbol
//val5 ans val6 are different
console.log(val5 === val6);

const val7 = null // null
let val8 // undefined
// Big Int would have a very big sized number
const bigNumber = 842497497389578583589n // By adding n we treat it as a BigInt

// Reference (Non Primitive)
// Array , Object , Function

// Array
let myHeroes = ["Hanuman","Ram","Krishna"]; // Type -> Object

// Object
let myObj = {  // Type -> Object
     name: "Joshi",
     age: 23
};

// Function 

const muFunction = function(){ // Type -> Function Object
    console.log("Hii");
};