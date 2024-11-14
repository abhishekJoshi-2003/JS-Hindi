// const instaUser = new Object();
const instaUser = {} // It will make an empty object

instaUser.name = "Joshi"
instaUser.age = 23
instaUser.isLoggedIn = false

// console.log(instaUser);

const faceUser = {
     email: "Joshi@gmail.com",
     fullName: {
        userFullName: {
            firstName: "Abhishek",
            lastName: "Joshi"
        }
     }
}

// console.log(faceUser.fullName.userFullName.firstName);
// console.log(faceUser.fullName.userFullName);
// console.log(faceUser.fullName?.userFullName.firstName); // This syntax is used in API responses when the object may or may not be in existance

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {5:'e',6:'f'}

// const obj4 = {obj1,obj2,obj3}; // It will simply make all the objects as elements of the new onject
// console.log(obj4);

// const obj4 = Object.assign({},obj1,obj2,obj3) // It will merge all source objects 1,2 and 3 in {} target object
// console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3} // Using Spread Operator
// console.log(obj4);

const users = [ // It is Array Of Objects
    {},
    {},
    {}
]
// console.log(users[0].email); // Way of Accessing Objects from Array

console.log(instaUser);
console.log(Object.keys(instaUser)); // It will return all the keys in from of array
console.log(Object.values(instaUser)); // It will return all the values in from of array
console.log(Object.entries(instaUser)); // It will return all the elements of object in form of array of arrays in which each small array will contain key and value
console.log(instaUser.hasOwnProperty('isLoggedIn')); // It will tell if the property in the ibject exist or not
