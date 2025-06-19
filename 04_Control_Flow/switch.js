// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// switch would have the variable as key which would decide the flow
// After matching the case if break is missing there...the all downward cases will be executed without checking except default
// let month = 3;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("Hii!! You are wrong");
//         break;
// }

let month = "jan";
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;
    default:
        console.log("Hii!! You are wrong");
        break;
}