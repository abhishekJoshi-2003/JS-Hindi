// We will learn about Dates here 
let myDate = new Date();
// console.log(myDate); // It is not clearly Visible
// console.log(myDate.toString()); // Tue Nov 12 2024 11:29:04 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Tue Nov 12 2024
// console.log(myDate.toISOString()); // 2024-11-12T11:29:04.083Z
// console.log(myDate.toJSON()); // 2024-11-12T11:29:04.083Z
// console.log(myDate.toLocaleString()); // 11/12/2024, 11:29:04 AM
// console.log(myDate.toLocaleDateString()); // 11/12/2024
// console.log(typeof myDate); // Object

// Creating our own date
// let myOwnDate = new Date(2023,0,12,12,30,45) // (Year,Month(from 0),Date,Hours,Minutes,Seconds)
// let myOwnDate = new Date("2023-01-12"); // YYYY-MM-DD
let myOwnDate = new Date("01-12-2023"); // MM-DD-YYYY
// console.log(myOwnDate.toLocaleDateString());

// Study of TimeStamp
// console.log(Date.now()); // It will give time in miliseconds from 1 January 1970
// console.log(myOwnDate.getTime()); // It will give duraion from 1 Jaunuary 1970 to specified date in miliseconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: 'long'
})
