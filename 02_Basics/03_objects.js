// Whenever we are making objects from constructor it would be singleton 
// If we are making object with literals it would not be singleton

// Constructor Method
// Object.create()

// Object Literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Abhishek Joshi",
    "f name": "Yogesh Joshi",
    [mySym]: "myKey1", // Symbol would be used as a key in such manner only
    age: 23,
    location: "Jaipur",
    email: "Joshi@gmail.com",
    isLoggedIn: false,
    loginDays: ["Monday","Friday"]
}

// Ways to Access
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["f name"]);
// console.log(JsUser[mySym]); // Correct way to access symbol from JS Object

// JsUser.email = "Abhishek@gmail.com" // Simple way to override the values of an object
// Object.freeze(JsUser); // A way to freeze object so that no changes can be made into it

// JsUser.email = "Abhishek@yahoo.com" // Changes won't take place
// console.log(JsUser);

// Way to add function to object as variable
JsUser.greeting = function(){
    console.log("Hello JS User")
}

// console.log(JsUser.greeting); // It is giving the reference to the function
// console.log(JsUser.greeting()); // It will call the function
// JsUser.greeting();

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`); // This keyword corresponds to the current object
}

JsUser.greetingTwo();