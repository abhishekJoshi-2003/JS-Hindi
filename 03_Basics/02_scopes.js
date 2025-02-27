// The block is some part of code that is surrounded by {}
// Var makes the variable out of all scopes and variable declared with var can be accessed outside the block also which make it less usable
// Var variable can also be redeclared

let a = 10; // Scope throughout the program 
if(true){
    let a = 100;
    const b = "Hii";
    var c = 30;
    console.log("Inner:"+ a);
    
}


console.log(a); // It will print outer a
// console.log(b); // It will throw out of scope error
console.log(c); // It will print latest value of c

// The global scope while running with node and running with browser are different