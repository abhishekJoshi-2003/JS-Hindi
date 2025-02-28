// The block is some part of code that is surrounded by {}
// Var makes the variable out of all scopes and variable declared with var can be accessed outside the block also which make it less usable
// Var variable can also be redeclared

let a = 10; // Scope throughout the program 
if(true){
    let a = 100;
    const b = "Hii";
    var c = 30;
    // console.log("Inner:"+ a);   
}

// console.log(a); // It will print outer a
// console.log(b); // It will throw out of scope error
// console.log(c); // It will print latest value of c

// The global scope while running with node and running with browser are different

// Function Nesting
// Having some funtion inside other function is known as nesting 
function one(){
    const userName = "Joshi";
    function two(){
        const website = "HDHUB4U";
        // console.log(userName); // Child can access Parent's Variables
    }
    // console.log(website);// It will throw error as Parent can not access chile variables
    two();
    
}

one();

// if nesting
if(true){
    const userName = "Joshi";
    if(userName === "Joshi"){
        const website = "HDHUB4U";
        // console.log(`${userName} ${website}`);
    }
    // console.log(website); // It will give error as Parent trying to access child property
}

// console.log(userName); // It would also give error due to out of scope access

// There are 2 ways of function declaration

// 1) This type of declaration allows user to call the function in code before its declaration\
console.log(addOne(1));
console.log(addOne(2));
function addOne(num1){
    return num1 + 1;
}
console.log(addOne(3));

// 2) In it function is stored in a variable which can be called only after the declaration
// console.log(addTwo(4)); // It would show error
const addTwo = function(num1){
    return num1 + 2;
}
console.log(addTwo(5));