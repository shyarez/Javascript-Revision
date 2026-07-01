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

// Common questions
// 1. What is the difference between function declaration(or fn statement) and expression in terms of hoisting?

// abcd();
// function abcd(){
//                 
// }  <- still works as its hoisted

// e.g ( fn expression)
// abcd();
// let abcd = function(){
//      
// }  <- Throws ERROR

// 2. Output of this?
// greet();
// function greet(){
//     console.log("Hello!");
// }  <-- O/P : Hello!

// 3. Convert this fnc into an arrow function
// function multiply(a,b){
//      return a * b;
// }

// ANS-
// let multiply = (a,b) => {
//     return a * b;
// }


// 4. Predict the output
// function sayHi(name = "Guest"){
// console.log("Hi", name);
// }
// sayHi(); <-- Guest ( Default value)


// 5. Use rest paarameter to accept any no. of scores and return the total
function getScore(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}
console.log(getScore(10,12,14,19));

// 6. Fix the function using early return
function checkAge(){
if(age < 18 ){
    console.log("Too young");
} else {
    console.log("Allowed");
}
}

// ANS
function checkAge(){
if(age < 18 ) return "Too young";
    return "Allowed";
}
console.log(checkAge(23));

// 7. Pass a function inside another function and execute it

function abcd(val){
   val();
}
abcd(function(){
    console.log("hi there !");
});

 // 8. pure or Impure function?
 let total = 0;
 function addToTotal(num){
    total +=num;
 }   // <- Impure fnc, as its modifying an outer value (total)


 // 9. Convert the above function into a pure function
 let total = 0;
 function addToTotal(num){
    let newTotal = total;
    newTotal +=num;
 } 

 // 10. Convert this normal function into IIFE
// Q. function init(){
// console.log("Imnitialized");
// }

(function init(){
 console.log("Initialized");
})();

// 11. What is the use of IIFE? Name 1 real world use case
let miaw = (function(){
    let score = 0;
    return {
    getScore: function () {
        console.log(score);
    },
    setScore: function (val) {
        score = val;
    },
};
})();


// 12. 
