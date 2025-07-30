// A Promise is an Object showing eventual completion or failure of Asynchronous Operation.
// We make new Promise Object which takes a callback function as argument
const promiseOne = new Promise(function(resolve,reject){ // This function has mainly two args 
    // Resolve connects the promise to .then
    // reject indicates the failure
    // Async Tasks -- DB calls , network operations etc.
    setTimeout(() => {
        console.log("Hii i am promise one");
        resolve();
    },1000);
});
promiseOne.then(() => {//Then also takes one callback function
     console.log("Hii i am resolve section of promise one");
});

// We can have promise without storing in variable
new Promise((resolve,reject) => {
     setTimeout(() => {
        console.log("Hii i am promise two");
        resolve();
     },1000);
}).then(() => {
    console.log("Hii i am resolver of promise two.");
});

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Hii I am P3");
        resolve({username: "Joshi",email: "Joshi@gmail.com"}); // In such a way we can paas values to then
    },1000);
});

promiseThree.then((user) => { // It will catch the data sent by resolve
    console.log(user);
})

const promiseFour = new Promise((resolve,reject) => {
      let error = true;
      if(!error)
      {
        resolve({username: "Brahman",email:"brahman@gmail.com"});
      }
      else
      {
        reject("Error: Failed"); // It would be captured by catch statement
      }
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username; // This return would be passed to next then in the chain which is called chaining
})
.then((username) => {
    console.log(`Username: ${username}`);
})
.catch((error) => { // It will catch the reject
    console.log(error);
})
.finally(() => { // It would always be called whenever promise is rejected or resolved
    console.log("The promise is either resolved or removed");
});

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
      let error = false;
      if(!error)
      {
        resolve({username: "Abhsa",email:"abhsa@gmail.com"});
      }
      else
      {
        reject("Error: JS Error"); // It would be captured by catch statement
      }
},1000)});

async function callPromise5() {
     try{
     const response = await promiseFive
     console.log(response);
     }
     catch(error){
        console.log(error);
     }
};
callPromise5();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error",error);
//     }
// }
// getAllUsers();

// A fetch reject only shows the error while bringing data... the status code like 404 or others are to be handled in the resolve block
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error: ",error);
})
.finally(() => {
    console.log("Data fetched successfully");
});

