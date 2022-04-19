###### Node - Interview Questions #####

### Explain in brief what is node js?
Node js use in server side it's Asyncrounous or non blocking nature. in node js source code cleaner and consitent. it provides fast and highly scalable service. it use js everywhere so it's easy for a js 
programer to  build back-end service using node js.

### How is node js non blocking?
As we know node.js is a single threaded and highly scalable system. instead of separate prosses and threads, it uses asynchronous, event-driven I/O operataion. it can achieve via single-threaded event loop and non blocking.

### What is throughput?
Throughput tells you how much data was transferred from a source at any given time.

### what is bandwidth?
bindwidth tells you how much data could theoretically be transferred from a source at any given time.

 Speed is one of the most important things used to measure network performance, and we use throughput and bandwidth to measure it.

### How is Node js having high IO throughput?
Server side caching is one of the most common strategies for improving the performance of a web application. it's primary aim is to increase the speed of data retrieval, either by spending less time computing such data or doing I/O.

### What are CPU intensive tasks?
CPU intensive tasks will block all request from completing, untill the task is completed.

### How can you end up blocking your main thread in node.js?
if a server request to do calculations that will take some time of complete .
will doing a 
setTimeout(()=>{
  write logic here.......
},time)

### What is the event loop?
event loop which is responsible for executing the code allows us to use callback and promises;

Due to fact that js is single threaded it performs only a single process at a time. so it is the event loop that allows node.js to perform non-blocking I/O operations.

let take a example of event loop 
console.log("1st")
setTimeout(()=>{
   console.log("2nd");
},2000);
console.log("3rd");

### What are different phases in event loop?
Event loop contains six main phases:
1. timer, 
2. I/O callbacks,
3. prepration / idle pahase
4. I/O polling 
5. setImmediate() callbacks execution,
6. close event callbacks.

### What is process.tick?
1. it's help to excute next callback function.
2. process.nextTick() is used to schedule a callback function to be invoked in the next iteration of the Eventloop.

### When can process.tick starve your event loop?
process.nextTick() function is specific to the Node.js Event Loop

### What is the difference between setTimeout and setInterval?
setTimeout() triggers the expression only once while setInterval() keeps triggerring expression regularly after the given interval of time.

### How can you make a network request with http module from the backend?

const http = require("http");
const server = http.createServer((req,res)=>{
    res.write('HEllo duniya'); // write responce for client
    res.end(); // end response
});

server.listen(8000,()=>{
    console.log('server is working');
})

### What are clusters?
a computer cluster is a group of two or more computer or nodes, that run in parallel to achieve a common goal.

### How does your Node.js application handle scale? Elaborate 
1. Scalability is built in the very core of the runtime.
1. Horizontally scalling a node.js application

### What are CORS? How do you configure them? Why do you need them?
1. cors is builtin middleware basiclly it's help conncet fronted to backend.

### What is rate limiting?
Rate limiting is a strategy for limiting network traffic. it puts a cap on how often someone can repeat an action within a certain timeframe.

### How does middlewares work in express?
functions that have access to the request object and response object and the next function in the application's request-responce cycle.
1. the next function is a function in the express router which, when invoked, executes the middleware succeeding the current middleware.

### What is the difference between Encryption and Hashing?
1. encryption is a two-way function that includes encryption and decryption 

2. hashing is a one-way function that changes a plain text to a unique digest that is irreversible.

### What is the difference between https and http?
Both are protocols of a perticular website is exchanged between Web Server and Web Browser.
1. https is much more secure compared to http.

### What is TLS?
Transport Layer Security => encrypts data sent over the internet to ensure that hackers are unable to see what you transmit

### What is AES?
Advanced Encryption Standard is used to order to protect data against unauthroised access and to encrypt this.
The cryptographic process key of varying lengths is utilised for this purpose.

### What is JWT Token? Why do we need to use JWT? What are some pros and cons?
1. pros => Simpler to use if careful => used cross service you can have one authorization server that deals with the login/ Registration and generates the token,.
2. const => compromised secreat key => if key is leaked by a careless or a rouge developer/ administrator the whole system is compromised.

### What is salting? Where do we store salt?
the salt is not an encryption key. so it can be stored in the password database along with username.

### What is the difference between Authorisation and Authentication?
1. authentication is the process of verifying who is someone.
2. authorization is the process of verifying what user has access to file or data..........

### What is difference between JS on the browser and node?
js and chrome is both v8.
so many of the node.js features are not available in a browser context.

### What is V8?
V8 provides the runtime environment in which js executes.
V8 is the name of the JavaScript engine that powers Google Chrome.