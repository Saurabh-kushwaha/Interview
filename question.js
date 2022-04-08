// for doing flat array here we use two method
// 1. concat 2. apply [].concat.apply([],arr)
// let arr = [1, [2, 3], [3], [[[5]], 6]];
// let ans = [].concat.apply([], arr);
// let final = [].concat.apply([], ans);
// console.log([].concat.apply([], final));

2. // using spread opperator can solve
// let ans = [].concat(...arr);
// console.log(ans);

3. // using flat() function can solve that
//  console.log(arr.flat(Infinity));

// function runProgram(input) {
//     const stack = input;
//     const res = [];
//     while (stack.length) {
//         const next = stack.pop();
//         if (Array.isArray(next)) {
//             stack.push(...next);
//         } else {
//             res.push(next);
//         }
//     }
//     console.log(res.reverse())
// } runProgram([1, [2, 3], [3], [[[5]], 6]]);

//Q.  what is currying ?
// we can say simpley a function from return another function that is called currying
// function area(hight) {
//     return function (width) {
//         return function (lenght) {
//             return hight * width * lenght;
//         }
//     }
// }
// console.log(area(3)(4)(5));

// Q. what does async await mean?
// allow to write promise based code it was synchronous and it checks that we are not breaking
// execution thread
// const getOut = async () => {
//     try {
//         var data = await "Hello masai"
//         console.log(data);
//     } catch (e) {
//         console.log(e.message);
//     }
// }
// console.log(1);
// getOut();
// console.log(2);
// if (true) {
//     console.log("saurabfhdfdsf");
// }

8. //Q What does the this keyword mean?
// A=> ‘this’ is a reference variable that refers to the current object.

9. // What is event bubbling?
// A => in the HTML DOM API when an event
// is in an element inside another element,
//  and both elements have registered a handle to that event.
// exmaple
//  <div id="parent">
//       <button>
//           <h2>Parent</h2>
//       </button>
//       <button id="child">
//       <p>Child</p>
//      </button>
// </div >
//  document.getElementById(
// "child").addEventListener("click", function () {
//             alert("You clicked the Child element!");
//         }, false);
// also we have need to wirte code for parnets

11. // What is event loop?
// A => event loop which is responsible for execute code and prosessing event
// like we can take a example

// const a = () => console.log('HEllo A');
// const b = () => console.log('Hello B');

// function ab() {
//     console.log('HEY We are here');
//     a();
//     b();
// } ab();

12. // Explain promises to a 5 year old, with simple examples
// promise is way to intract with function for what will be give responce
// that's mean it will show it's resolve or reject waht evar happend
// const myPromise = new Promise((resolve, reject) => {
//     if (resolve) {
//         console.log('Hey I will give you gift')
//     } else {
//         console.log('We are reject');
//     }
// }).then(() => console.log('Yes'))
//     .catch((e) => console.log(e.message))
//     .finally(console.log('Done'));

13. // What are classes? what are getters and setters?
// getters is mehtod to get property from class
// setter is method to set property in class
1.
// class Person{
//     constructor(name) {
//         this.name = name;
//     }
// }
// let person = new Person('Saurabh')
// console.log(person.name);
2.
// class Person{
//     constructor(name) {
//         this.name = name
//     }
//     get () {
//         return this.name;
//     }
//     set (newName) {
//         this.name = newName;
//     }
// }
// let person = new Person('Saurabh')
// console.log(person.get());
// person.set('Hey');
// console.log(person);

15. //How do you declare private and static variables in classes
// class Student{
//     // cunstructor method
//     constructor(name) {
//         this.name = name;
//     }
//     // prototype mehtod
//     RollNo() {
//         return this.name;
//     }
//     // statica mehtod we can not call direct bcz it's not behave like function
//     // so we have need to connect that method from class
//     static Hey() {
//         return "Hello";
//     }
// }
// let data = new Student('Saurabh');
// console.log(data.RollNo());
// console.log(Student.Hey());

16. //create a custom method for an array called myMap, use prototype chain to achieve this
// let arr = [1, 2, 3, 4, 5];
// arr = arr.map((a) => {
//     return a * 5;
// })
// console.log(arr);

17. // Create a Calculator class, it should be able to add,
// reduce multiply and divide.it should have a value getter,
// and that should return final output.keep the history of
//  changes made as well, and keep that private, and a user
// should be able to see previous changes made to the value
