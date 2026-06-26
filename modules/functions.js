// function expression
let fnc = function(){
    console.log("hello world");
}
fnc() // can be called as many times

// function syntax 
function hny(){
    console.log("happy new year!");
}
hny();

// fat arrow functions
let meow = () => {
   console.log("meoeowoowow");
}
meow();

// Parameters and arguments
function eat(v1){
    console.log(`${v1} is eating`);
}
eat("mira");
eat("chisa");

// e.g 2
function add(v1,v2){ // v1 and v2 are parameters
console.log(v1 + v2)
}
add(2,3); // <- 2 and 3 are arguments


// Default, Rest and Spread Parameters

// 1. Default Parameters
function subtract(v1 = 3, v2 = 2){
    console.log(v1-v2);
}
subtract();

// 2. Rest or Spread Parameters - ...
// ... -> if its used in function parameters then its rest
// and if its used in arrays or objects -> spread operator
function abcd(...val){
  console.log(val);
}
abcd(1,2,3,4,5,6);

// return means go back where u came from
function bcde(){
    return 12;
}
let val = abcd(23);
console.log(val);

// First - Class Functions
// Functions can be treated as values
function dcfe(val){
val();
}
// converted into
dcfe(function(){
    console.log("hey")
})

// high - order functions
// that function thatvreturns a function OR
// excepts a function in its parameters

function abcd(){

}
abcd(function(){

})


// OR
function abcd(){
    return function(){
        console.log("helloo")
    }
}
abcd()()

// pure vs impure functions
// PURE - that function that does not change any outside values
// IMPURE - that function that changes outside values/ sideeffects occurs

// pure
let a = 12;   
function xyz(){  // Pure function  
    console.log("hehehe");
}

function yyz(){  // <- Impure function
    a++;
}

// Closures and lexical scoping
// Closures : one function that returns one more function
// and the returned function will always use parent function's
// any of its variables

function ssh(){ // closures
    let a = 12;
    return function(){
        console.log(a);
    }
}

// lexicals coping
// the scope of its physical scoping
//e.g
function ttt(){
    let a = 5;
    function sss(){
        let b = 4;
        function mmm(){
            let c = 14
        }
    }
}


// IIFE ( Immediately Invoked Function Expressions)
(function(){

})();

// Hoisting differences between declaration and expression
dhdh();

function dhdh(){
    console.log("hi there!")
} // this works, this is called hoisting
// not allowed in other langs
// hoisting is basically using smth before its made
// **NOTE** : Hoisting works in function statement or function declaration
// BUT if u make it a function expression, it WONT work.
//e.g

dhdh();

let dhdh = function(){
    console.log("hi there!")
}

