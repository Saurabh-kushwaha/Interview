1// What is hoisting?
// one of advantag of hosting use a funciton before
// declare in code
// carName('Tagao');
// function carName(name) {
//     console.log(`i will purchase that ${name}`);
// }
// without hosting we can write code like this
// function carName(name) {
//     console.log(`i will purchase that ${name}`);
// }
// carName('Tagao');

// // let and const
// console.log(num);
// let num = 5;
// const num = 5;
// var num = 5;   // because var have default initialization undefined
// sum diffrence have between let const and var
// Hoisting allows functions to be safely used in code before they are declared.
// Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

2. // What is scoping?
// globle scope , local scope,  block scope
// var x = 10;
// function test()
// {   
//     if (x > 20) {
//         var x = 50;
//     }
//     console.log(x);
// }
// test();
// that is combined effect of var hoisting and scoping

1. // scope determine the accessibiliy and visibility of a var
// js does not have block lavel scope it have functional scope
// var x = 10;
// if (true) {
//     var x = 20;
//     console.log(x);
// }
// console.log(x);
// var y = 20;
// function add() {
//
//     console.log(y);
// } add();
// var x = 10;
// console.log(x);
 
// function test()
// {
//     var x = 20;
//     console.log(x);
 
//     if (x > 10) {
//         let x = 30;
//         console.log(x);
//     }
 
//     console.log(x);
// }
 
// test();
// console.log(x);

3. // How are var, let const different?
// var we can reassigan and redeclare and also have functinal scope global scope
// It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function.
// let we can reassign but cannot redeclare only have block scope
// const we cannot reassign and can not redeclare only have block scope.

4.// What are the two main differences in arrow functions?
// Arrow functions are just shorter alternatives to anonymous expressions.
// The drawback is that arrow functions are a bit less human-readable than anonymous functions.
// here we donot need to write return it will excute and other we have need to write other it will return undefined


5. // What does call apply bind do?
// A => call method
// let obj = {
//     food: "Mater Paneer"
// }
// function swiggy(feedback,test) {
//     return `${this.food} ${feedback} ${test}`
// }
// console.log(swiggy.call(obj, 'Awsome', 'Test Good', 'OverAllgood'));

// B => Apply Method
// let obj1 = {
//     add: function (a, b, c) {
//         return a + b + c;
//     }
// }

// function sumup(a,b,c) {
//     return this.add(a, b, c);
// }
// console.log(sumup.apply(obj1, [1, 2, 3, 8]));
// BIND METHOD
// The tricky part about bind is that has the same functionality as like
// apply but insted callling the function immediately, it returns
// a bound function

// let obj = {
//     add: function (a,b,c) {
//         return a + b + c;
//     }
// }

// function sumup(arg) {
//     return this.add(...arg);
// }
// let bound = sumup.bind(obj,[1,2,3]);
// console.log(bound);

6. //Does Call apply bind work for arrow functions?
// const obj = { num: 2 }

// const addToThis = (a, b, c) => {
//   return this.num + a + b + c
// }
// console.log(addToThis.apply(obj, [1, 2, 3, 4, 3]));

// It doesn't work anymore and throws an error: Cannot read property 'num' of undefined.
// arrow functions) doesn't create new functional context and use context of a calling function.

7. // What are closures?
// closer basiclly function inside function ruturning the value that's is called closer
// var a = 10;
// function sum() {
//     var b = 20;
//     return function () {
//         var c = 40;
//         return function () {
//             return a + b + c;
//         }
//     }
// }
// console.log(sum()()());

8. // Write a program to debounce a search bar?
// Just like Throttling, Debounce limits the times an event fires.
//  The difference is with this technique, no matter how many times
//  the user fires the event, the function will be executed only after
//  a specific time after the last fired.

9. // Write a program to throttle a search bar?
// Throttling is a pattern that we can limit the times it fires an event.
// So, no matter how many times the user can trigger this, it executes only
// once in a specific time interval.



