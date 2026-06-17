// if, else, else if
// switch case
// early return pattern

// If-Else Statement
if(condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}


// If-Else If-Else Statement
if(condition1) {
    // code to execute if condition1 is true
} else if(condition2) {
    // code to execute if condition2 is true
} else {
    // code to execute if both condition1 and condition2 are false
}

// Switch
switch(expression) {
    case value1:
        // code to execute if expression === value1
        break;
    case value2:
        // code to execute if expression === value2
        break;
    default:
        // code to execute if expression does not match any case
}

// Early Return Pattern
function getVal(val) {
    if (val < 100) return "A";
    else if (val < 75) return "B";
    else if (val < 50) return "C";
    else return "D";
}
console.log(getVal(12)); // Output: A