// 1. // closer
// function  add(a) {
//     let b = 5;
//     return function (val) {
//         return a + b+val;
//     }
// }
// console.log(add(5)(7));

// 2. // What are IIFE?
    // imidatily invoked function
// (function (){
//   console.log("HELLo SAurabr")
// })();
//  This type of function is called immediately invoked as
// these functions are executed as soon as they are mounted to the stack,
// it requires no explicit call to invoke the function.

//3.  What is currying?
// Currying simply means evaluating functions with multiple arguments
// and decomposing them into a sequence of functions with a single argument

// let calValume = (l) => {
//     return (b) => {
//         return (h) => {
//             return l * b * h;
//         }
//     }
// }
// console.log(calValume(2)(4)(6));

// 5 .Explain some areas where you have seen currying being implemented in React / other libraries?
// in redux third party templeate of counter also use closer increment value inside function

// function increment() {
//     let x = 0;
//     return x++;
// }

// <button onclik= {increment}>INC</button>