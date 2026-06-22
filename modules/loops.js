// the repition is called iteration, called loops
// e.g 1 1 1 1 1
// e.g 1 2 3 4 5

// when to use for:
// 1. When the number of iterations is known beforehand.
// 2. When you need to access elements by their index.
// kahan se jana hai -> kahan tak jana hai -> kitna step lena hai/ kaise jana hai
// basically, starting and ending points are known

// when to use while:
// 1. When the number of iterations is not known beforehand.
// 2. When you want to repeat a block of code as long as a condition is true.
// starting point is known, but ending point is not known, so we keep checking the condition


// for loop syntax
// for(initialization; condition; increment/decrement) {
//     // code to be executed
// }

// e.g print numbers from 1 to 5
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop syntax
// start
// while(end condition) {
//     // code to be executed
      // change
// }

// e.g print numbers from 1 to 5
let i = 1;
while(i <= 5) {
    console.log(i);
    i++;
}

// do-while loop syntax
// start
// do {
//     // code to be executed
// } while(end condition);

// e.g print numbers from 1 to 5
let j = 1;  
do {
    console.log(j);
    j++;
} while(j <= 5);

// even the while condition is false,
//  the do will execute the code block at least once

// break and continue statements
// e.g 
for( let i = 1; i <= 201; i++) {
    console.log(i);
    if(i==32){
        break;
    }
}

// e.g
for ( let i = 1; i<= 201; i++){
    if(i==32){
        continue;
    }
    console.log(i);
}


// Practice sesh
// Q1. Print no.s from 1 to 10 usinga for loop
for(let i=1; i<11; i++){
    console.log(i);
}

// Q2. Print no.s from 10 to 1 using a while loop
let i =10;
while(i>0){
    console.log(i);
    i--;
}

// Q3. Print even no.s from 1 to 20 using a for loop
for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}

// Q4. Print odd no.s from 1 to 15 using a while loop
let i = 1;
while(i<16){
    if(i%2!=0){
        console.log(i);
    }
    i++;
}

// Q5. Print the multiplication table of 5 using a for loop
for(let i=1; i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}

// Q6. find the sum of numbers from 1 to 100 usinga loop.
let sum = 0;
for (let i = 1; i<=100; i++){
    sum += i;
}
console.log(sum);
