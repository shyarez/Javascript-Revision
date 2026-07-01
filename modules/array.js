let arr = [1,2,3,4]; // array creation
console.log(arr[0]); // array access

// one more method but isnt used much
// let arr_ex = new Array();

// Modification of Arrays
let arr1 = [1,2,3,4];
console.log(arr1);
arr1[2] = 24;
console.log(arr1);  // updation


// ARRAY METHODS
let arr2 = [1,2,3,4,5];
console.log(arr2.push(520)); // returns the length of the array
console.log(arr2.pop());   // returns the element that was REMOVED
console.log(arr2.shift()); // removes the first value of original array)
console.log(arr2.unshift(99)); // adds a value to the first position and the rest elem
                            // gets shifted

console.log(arr2.splice(2,1));   // 2-> from which position we gotta start removing
                                 // 1 -> how many values u want to remove                         
let newArr = arr2.slice(0,3); // returns a new copy of your array
                                      // NOTE: Your main array reamais unaffected
console.log(newArr);
console.log(arr2);

// MORE METHODS
let arr3 = [1,2,3,4,5];
console.log(arr3.reverse()); // reverses ur array

// # IMP 
let sr = arr3.sort(function(a,b){ // sort always accepts a function with 2 params
     return a - b; // ascending, b-a = descending
});

let arr4 = [11,62,3,4,25];
arr4.forEach(function(val){
    console.log(val+5);
})

//Map
// create map only when u want to create a new array
// on the basis of previous array's data

// tip: as soon as u see an array think its a new blank array []
// with no of elements same as the prevoous array
// e.g
let arr5 = [11,62,3,4,25];
let newArr5 = arr5.map(function(val){
    return 12; // 12 will be printed 5 time in that array [12,12,12,12,12]
});
 console.log(newArr5);


 // Filter
 // also creates a new array but it can leave out values, like check if its condition
 // might be either true or false
 let arr6 = [1,2,3,4,1,5,6,7,8];
 let newArr6 = arr6.filter(function(val){
    if (val > 4) return true;
 });


 // Reduce 
 // from one array we reduce it to single value
 let ans = arr6.reduce(function(accumulator,val){
      return accumulator + val;
 },0);


 // Find
 // finds the 1st element to be found
 let va = arr6.find(function(val){
    return val === 1;
 });


 // Some
 // checks if some elems pass the condn
 // returns true or false that satisfies the given condn
 let random = [ 10, 55, 62, 93, 88];
 let goodStud = random.some(function(val){
         return val > 85;
 });
 console.log(goodStud);


 // Every
 // opp of some, checks if EVERY elem passes the condn
 let allGoodStud = random.every(function(val){
      return val > 85;
 });
console.log(allGoodStud);
 


// Destructuring and Spread Operator
let array = [1,2,3,4,5];
let [a,b, , c] = arr; // Destructuring

let array2 = [...array]; // Spread Operator





