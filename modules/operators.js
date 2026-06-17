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

