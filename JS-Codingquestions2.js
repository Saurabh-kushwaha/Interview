// 1.// Give an example where call apply bind is. required?

// // var car = {
// //     name: 'Audi',
// //     model: 'S7',
// // }
// //apply
// // function dispalayDetails(...owner) {
// //     for (let i in owner) {
// //     console.log(this.name, this.model, owner[i]);
// //    }
// // }
// // bind
// // function dispalayDetails(owner) {
  
// //     console.log(this.name, this.model, owner);
 
// // }
// // call
// // dispalayDetails.call(car, 'Saurabh','Sachin');
// // apply
// // dispalayDetails.apply(car, ['saurabh', 'sachin', 'suraj']);
// // bind
// // let x = dispalayDetails.bind(car, 'saurabh');

2. // What is the difference between readFile and readFileSync?
// readFile() method which reads a file, but parallelly it
// continues to compile the remaining program too,
// after that it calls the fs.readFileSync() method which reads another file,

3. // What does process in node.js mean?
// The process object in Node.
// js is a global object that can be accessed
// inside any module without requiring it.

4. // Explain what node.js is?
// Node. js (Node) is an open source development platform
// for executing JavaScript code server - side.

5. // What is the difference of JS from browser to JS on node.js
// Unlike the browser where Javascript is sandboxed for your safety,
// node.js has full access to the system like any other native application.
// This means you can read and write directly to / from the file system,
// have unrestricted access to the network, can execute software and more.

7. // Write three different ways to reverse a string in Javascript? a. using inbuilt method, b. iteratively, c. recursively
1.// inbuilt
// let str = 'saurabh';
// str = str.split("");
// str.reverse();
// console.log(str.join(""));

2. // itretative
// let ans = '';
// for (let i = str.length-1; i >=0; i--){
//     ans += str[i];
// }
// console.log(ans);

3. // recursively
7. // Write a program to check two objects are equal ( deep equal )
// console.log({} == {});

8. // What is shallow equal?
// A function for performing a shallow comparison between
// two objects or arrays.
// Two values have shallow equality when all of their members are strictly equal
//  to the corresponding member of the other.

9. // 