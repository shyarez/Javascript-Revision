// if, else, else if
// switch case
// early return pattern

// If-Else Statement
// if(condition) {
//     // code to execute if condition is true
// } else {
//     // code to execute if condition is false
// }


// If-Else If-Else Statement
// if(condition1) {
//     // code to execute if condition1 is true
// } else if(condition2) {
//     // code to execute if condition2 is true
// } else {
//     // code to execute if both condition1 and condition2 are false
// }

// Switch
// switch(expression) {
//     case value1:
//         // code to execute if expression === value1
//         break;
//     case value2:
//         // code to execute if expression === value2
//         break;
//     default:
//         // code to execute if expression does not match any case
// }

// Early Return Pattern
function getVal(val) {
     if (val < 100) return "A";
     else if (val < 75) return "B";
     else if (val < 50) return "C";
     else return "D";
 }
 console.log(getVal(12)); // Output: A

// practice sesh
// Q. Write a function getGrade(score) that:
// Takes a student's marks (0 to 100)
// Returns the grade based on this logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 F
// Anything else "Invalid marks"

function getGrade(score){
    if (score >= 90 && score <= 100){
        return "A+";
    } else if (score >= 80 && score < 90){
        return "A";
    } else if (score >= 70 && score < 80){
        return "B";
    } else if (score >= 60 && score < 70){
        return "C";
    } else if (score >= 33 && score < 60){
        return "D";
    } else if (score >= 0 && score < 33){
        return "F";
    } else {
        return "Invalid marks";
    }
}

console.log(getGrade(78));


// Rock-paper-scissors logic

function rps(user,computer){
     if(user === computer) return "It's a tie";
     if(user ==='rock' && computer ==='scissors') return "user wins";
     if(user === 'paper' && computer ==='rock') return "user wins";
     if(user === 'scissors' && computer ==='paper') return "user wins";

        return "computer wins";
}

console.log(rps("rock","scissors")); // Output: User wins

// Fallthrough in switch case
let x = 2;
switch(x) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");     
    case 3:
        console.log("Three");
    default:
        console.log("Default");
} // Output: Two Three Default (because of fallthrough, no break statements)
