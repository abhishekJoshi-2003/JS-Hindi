// Immedietly Invoked Function Expressions(IIFE)
// Usecases :-> 1) Automatically connecting application to database as it starts
// Manytimes we face problem due to global scope of variables and to overcome it we use IIFE

// Way 1) IIFE :->
(function chai(){
    // Named IIFE
    console.log("DB CONNECTED");
})(); // We just wrap up the function in parenthesis and add a set of parenthesis after it and if we want to give a stopage to this function execution then we need to put a semi colon after function.

( () => {
    console.log("DB CONNECTED AGAIN");
})();

// IIFE with parameters
( (name) => {
    console.log(`Welcome ${name}`); 
})('Joshi');