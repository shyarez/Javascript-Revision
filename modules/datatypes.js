// Two Types
// 1. Primitive Data Types
// 2. Reference Data Types

// Primitive Data Type: A data type that holds a single value and is immutable (cannot be changed). 
// Examples include string, number, boolean, undefined, null, symbol, and bigint.
// ** Those values which we copy, we get a real copy of the value, 
// and if we change the value of one variable, it does not affect the other variable.

// Reference Data Type: A data type that holds a reference to a value stored in memory. 
// Examples include objects, arrays, functions, dates, and regular expressions.
// ** Those values which we copy, we get a reference to the value, 
// and if we change the value of one variable, it affects the other variable as well, 
// because both variables point to the same value in memory.

// Primitive Data Types
// 1. String: A sequence of characters enclosed in single quotes, double quotes, or backticks.
// 2. Number: Represents both integer and floating-point numbers.   
// 3. Boolean: Represents a logical value, either true or false.
// 4. Undefined: Represents a variable that has been declared but not assigned a value.
// 5. Null: Represents the intentional absence of any object value.
// 6. Symbol: Represents a unique immutable value.
// 7. BigInt: Represents integers with arbitrary precision.

// Reference Data Types (), [], {}
// 1. Object: A collection of key-value pairs.
// 2. Array: An ordered list of values. 
// 3. Function: A block of code designed to perform a particular task.
// 4. Date: Represents a single moment in time.
// 5. RegExp: Represents a regular expression, which is used for pattern matching in strings.

// Dynamic Typing
// JavaScript is a dynamically typed language, which means that variables can hold values of any type 
// and can change type at runtime.
let a = 10; // a is a number
a = "Hello"; // a is now a string
a = true; // a is now a boolean

//typeof quirks
// The typeof operator returns a string indicating the type of the operand.
console.log(typeof null); // "object" (this is a known bug in JavaScript, null is not actually an object)
console.log(typeof undefined); // "undefined"
console.log(typeof []); // "object" (arrays are a type of object in JavaScript)
console.log(typeof {}); // "object"
console.log(typeof function(){}); // "function" (functions are a special type of object in JavaScript)  
console.log(typeof NaN); // "number" (NaN stands for "Not-a-Number", but it is of type number)

// Type Coercion
// Type coercion is the automatic or implicit conversion of values from one data type to another. 
// This can happen in various situations, such as when using the + operator with different types.
console.log(1 + "2"); // "12" (number 1 is coerced to a string and concatenated with "2")
console.log("5" - 2); // 3 (string "5" is coerced to a number and subtracted from 2)
console.log("5" * "2"); // 10 (both strings are coerced to numbers and multiplied)
console.log("5" / "2"); // 2.5 (both strings are coerced to numbers and divided)

// Truthy and Falsy Values
// In JavaScript, values can be classified as truthy or falsy when evaluated in a boolean context. 
// Falsy values are those that evaluate to false, while truthy values evaluate to true.

// Falsy values in JavaScript:
// - false
// - 0
// - -0
// - 0n (BigInt zero)
// - ""
// - null
// - undefined
// - NaN
// - document.all (a special case in JavaScript that is considered falsy)

// All other values are truthy, including:
// - true
// - 1
// - -1
// - "0"
// - "false"
// - []
// - {}
 