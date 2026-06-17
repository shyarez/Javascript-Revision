// Types of operators
// Arithmetic operators : +, -, *, /, %, ++, --, **
// Assignment operators : =, +=, -=, *=, /=, %= 
// Comparison operators : ==, !=, ===(strict), !==(strict), <, >, <=, >=
// Logical operators : &&, ||, !
// Unary operators : typeof, void, delete
// Ternary operators : ? :

//e.g
// Arithmetic operator
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);    

// Assignment operator
let c = 10;
c += 5; 
console.log(c);
c -= 5; 
console.log(c);
c *= 5;
console.log(c);
c /= 5;
console.log(c);
c %= 5;
console.log(c);

// Comparison operator
let d = 10;
let e = '10';
console.log(d==e); // true , it checks for value only
console.log(d===e); // false , it checks for value and type
console.log(d!=e); // false , it checks for value only
console.log(d!==e); // true , it checks for value and type
console.log(d > 5); // true
console.log(d < 15); // true
console.log(d >= 10); // true
console.log(d <= 10); // true

// Logical operator
let f = true;
let g = false;
console.log(f && g); // false
console.log(f || g); // true
console.log(!f); // false
console.log(!g); // true

// Unary operator
let h = 10;
console.log(typeof h); // number
delete h; // deletes the variable h
console.log(h); // undefined
console.log(void 0); // undefined

// Ternary operator
let i = 10;
let j = (i > 5) ? 'greater than 5': 'less than or equal to 5';
console.log(j); // greater than 5

// typeof and instanceof operators
let k = 10;
console.log(typeof k); // number
console.log(k instanceof Number); // false, because k is a primitive value, not an object

let l = [];
console.log(l instanceof Array); // true

let b = {};
console.log(b instanceof Object); // true, because all objects in JavaScript are instances of Object
console.log(b instanceof Array); // false, because b is not an instance of Array

let m = 12;
console.log(m instanceof Number); // throws a TypeError, because m is a primitive value, not an object

// quirks of operators
typeof null; // returns 'object', which is a known bug in JavaScript
console.log(0.1 + 0.2); // returns 0.30000000000000004, due to floating-point precision issues in JavaScript
typeof []; // returns 'object', because arrays are objects in JavaScript
typeof function (){}; // returns 'function', which is a special case in JavaScript, as functions are also objects

// Practice Questions:
let x = 10;
let y = 20;

if (x > 5 && y < 25) {
    console.log("A");
} else {
    console.log("B");
}    // Output: A

let isAdmin = true;
let isLogged = false;

if (isAdmin || isLogged) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}    // Output: Access granted

let temp = 35;

if (!(temp < 30)) {
    console.log("Hot");
} else {
    console.log("Pleasant");
} // Output: Hot

let a = 0;
if (a) {
    console.log("Truthy");
} else {
    console.log("Falsy");
} // Output: Falsy

let score = 78;

let grade = (score >= 90) ? 'A' : (score >= 75) ? 'B' : (score >= 60) ? 'C' : 'FAIL';
console.log(grade); // Output: B


let points = 120;

let status = (points >= 100) ? 'Gold' : (points > 50) ? 'Silver' : 'Bronze';
console.log(status); // Output: Gold


let loggedIn =  true;
let hasToken = false;

let access = (loggedIn && hasToken) ? 'Allow' : 'Deny';
console.log(access); // Output: Deny

let a = 5;
a++;
console.log(a); // Output: 6

let b = 7;
++b;
console.log(b); // Output: 8

let c = 3;
let d = c++;
console.log(c,d); // Output: 4,3

let e = 4;
let f = ++e;
console.log(e,f); // Output: 5,5

let p = 10;
console.log(p--); // Output: 10
console.log(p); // Output: 9

let n = 5;
let result = n++ + ++n;
console.log(result); // Output: 12 (5+7)

let likes = 100;
function likePost(){
    return ++likes;
}
console.log(likePost()); // Output: 101
console.log(likes); // Output: 101, because likes is updated globally

let count = 5;

if (count-- === 5){
    console.log("Matched");    
} else {
    console.log("Not Matched");
} // Output: Matched, because count is compared before decrementing
