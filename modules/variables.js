// var, let, const

var a; // declaration
var a = 10; // declaration and initialization
// PROPERTIES OF VAR:-
// 1. var adds a property to the global object (window in browsers)
// 2. var can be redeclared and updated
// 3. var is function-scoped
// Deprecated in ES6, use let and const instead


let a; // declaration
let a = 10; // declaration and initialization
// PROPERTIES OF LET:-
// 1. let does not add a property to the global object
// 2. let cannot be redeclared but can be updated
// 3. let is block-scoped

const a = 10; // declaration and initialization
// PROPERTIES OF CONST:-
// 1. const does not add a property to the global object
// 2. const cannot be redeclared and cannot be updated
// 3. const is block-scoped


// Scope (global, local, functional)

// Global scope: variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
// Local scope: variables declared inside a function or block are in the local scope and can only be accessed within that function or block.
// Functional scope: variables declared with var inside a function are in the functional scope and can only be accessed within that function.

var a = 10; // global scope

{
    let b = 20; // block scope
}               // var does not respect  block scope
 
function test() {
    var c = 30; // functional scope
    console.log(c); // 30
}


// Reassignment and redeclaration
var a = 10; 
a = 32; // reassignment
var a = 50; // redeclaration

let b = 20;
b = 40; // reassignment
// let b = 50; // redeclaration (error)


// Temporal Dead Zone (TDZ)
// The TDZ is the time between the start of a block and the point where a variable is declared.
// During this time, the variable cannot be accessed and will throw a ReferenceError if accessed.

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10; // TDZ ends here, 'a' is now accessible
// In the case of var, there is no TDZ, and the variable is hoisted to the top of its scope, but it will be undefined until it is initialized.


// Hoisting Impact per type
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are declared in the code.
console.log(a); // undefined (due to hoisting)
var a = 10; // variable declaration is hoisted, but initialization is not
// e.g var a = 12 is divided into two parts: 
// var a; (hoisted) and a = 12; (not hoisted)

// In the case of let and const, they are also hoisted, but they are not initialized until their declaration is evaluated. 
// This means that if you try to access them before their declaration, you will get a ReferenceError due to the Temporal Dead Zone (TDZ).

// var -> hoist -> undefined
// let and const -> hoist -> TDZ (ReferenceError if accessed before declaration)