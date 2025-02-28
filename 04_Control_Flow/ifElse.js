// Control Flow or Logic Flow -> refers to the flow of program according to the logical conditionals as if and other
// 1) IF
/* The flow will go to if block only in a scenerio when the condition is true
 if(condition){
 
 }
*/

// const temperature = 41;
// if(temperature === 41){
//     console.log(`Temperature is ${temperature}`);  // If the condition is true then it would be printed;
// }
// else{
//     console.log("Temperature is greater than 41"); // Otherwise it will be printed
// }
// console.log("This will always be printed");
// Conditionals -> >,<,>=,<=,==,!=,===,!==

// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User Power : ${power}`);
// }
// console.log(`User Power : ${power}`); 

const balance = 1000;
if(balance>500) console.log(balance),console.log(balance); // We can do without blocks by seperating statements by commas and then putting semicolon after end of if but it is not a good practise

// Ladder If Else   
// if(balance < 500){
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("Less than 750");
// }
// else if(balance < 1000){
//     console.log("Less than 1000");
// }
// else{
//     console.log("Greater than or Equal to 1000");
// }

// And Operator(&&) -> To check mutiple conditions and will go to block if each condition is true
// const userLoggedIn = true;
// const debitCard = true;
// if(userLoggedIn && debitCard && 2==2){
//     console.log("Ready to purchase");
// }

// Or Operator(||) -> To check if one of many condition is true then go to block
// const isLoggedGoogle = false;
// const isLoggedEmail = true;
// if(isLoggedEmail || isLoggedGoogle){
//     console.log("Condition checked");    
// }