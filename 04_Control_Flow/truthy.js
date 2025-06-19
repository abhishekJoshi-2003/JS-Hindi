// let userEmail = "Joshi@gmail.com"

// if(userEmail){
//     console.log("Joshi is here");
// }
// else{
//     console.log("Joshi is not here");
// }

// Falsy Values -- The values that are assumed false
// false , 0 , -0, bigInt 0n , null , undefined , NaN , ""

// Truthy Values -- All values that are not falsy
// "0" , 'false' , " " , [] , {} , function() {}

// Checking Empty Array
let userEmail = []
if(userEmail.length === 0)
{
    console.log("Array is Empty");
}

let myObj = {}
if(Object.keys(myObj).length === 0)
{
    console.log("Object is Empty");
}

// false == 0 , 0 == false , '' == false    --> True

// Nullish Coalescing Operator (??) : null undefined
// It checks for null safety hence is we are getting value as null or undefined then the other value would be assigned

let val1 = 5 ?? 10; // 5
let val2 = null ?? 10; // 10
let val3 = undefined ?? 20; // 20
let val4 = null ?? 15 ?? 30; // 15 -- The first value

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator
// condition ? truth : false

80 > 100 ? console.log("100 is Smaller") : console.log("100 is Greater");