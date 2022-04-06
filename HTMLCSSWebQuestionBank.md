Q. Explain briefly what happens when you hit a url? explain DNS lookup
A. DNS is basically a domain name system.  When we want to interact with a website we have to url that url will hit a request by the user and it will interact with the server and get back to you output. 

Q. What is a URLs full form? Explain what a url is and the four parts it consists of The protocol in use The hostname of the server The location of the file The arguments to the file

A. Uniform resource locator. There are four parts of url Protocol: it tells whatever method you are applying like http. Second one is domain name it’s tell what is specific name of url like amazon , facebook, path it’s tell which you want to go home login product. And query it’s telling what ever queries you want to find, like if you want to show 10 products on only a page here use the query param.

Q. What is HTTP protocol?
A. HyperText Transfer Protocol works on basically a request response protocol, HTTP gives users a way to interact with client and server.

Q. What is TCP Protocol?
A. Transmission Control Protocol (TCP) 
an Internet protocol that connects a server and a client. Together, 
=>
organizing data in a way that ensures the secure transmission between the server and client.

Q. Explain all the different HTTP methods?
A. HTTP methods are POST, GET, PUT, PATCH, DELETE
=> these method use for create, read, update, and delete

Q. What are HTTP headers?
A. client and the server pass additional information with an HTTP request or response

Q. What are some HTTP response codes? what does it mean? 2xx, 3xx, 4xx, 5xx
A. 2xx successful – the request was successfully received, understood, and accepted. 
3xx redirection – further action needs to be taken in order to complete the request. 
4xx client error – the request contains bad syntax or cannot be fulfilled. 
5xx server error – the server failed to fulfil an apparently valid request.

Q. What does cache control on http response mean?
A. Cache-control is an HTTP header used to specify browser caching policies in both client requests and server responses.

Q. What is polling?
A. Polling is a technique by which the client asking the server for new data regularly.

Q. What is long polling?
A. Long Polling is a near-real-time data access pattern that predates WebSockets. 

Q. What are web sockets?
A. The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. 

Q. How is web sockets different from HTTP?
A. WebSockets allow for a higher amount of efficiency compared to REST because they do not require the HTTP request/response overhead for each message sent and received. When a client wants ongoing updates about the state of the resource, WebSockets are generally a good fit.

Q. What is HTTPS?
A. an internet communication protocol that protects the integrity and confidentiality of data between the user's computer and the site.

Q. What is Cross Origin Resource Sharing? ( CORS ) Why do we need it?
A.  allows you to make requests from one website to another website in the browser

Q. What does Access-Control-Allow-Origin header do?
A. The Access-Control-Allow-Origin header is included in the response from one website to a request originating from another website, and identifies the permitted origin of the request.

Q. What is clickjacking? How do you fix it?
A. Clickjacking is an attack that fools users into thinking they are clicking on one thing when they are actually clicking on another. 

Q. What are some performance metrics for your website?
A. 
1.  Measure Your Audience’s Reach and Impact
2. Identify Your Traffic Sources
3. Measure Average Session Time and Bounce Rate
4. Measure Conversion Rates
5. Measure ROI and Profits

Q. What does the following term mean?
Time to first byte =>
Time to First Byte (TTFB) refers to the time between the browser requesting a page and when it receives the first byte of information from the server.

Page load time =>
 the average amount of time it takes for a page to show up on your screen. 
 . It's calculated from initiation (when you click on a page link or type in a Web address) to completion (when the page is fully loaded in the browser).

Q. What do CDN or Content Delivery Networks do? When do you need a CDN?
A. it's provide fast delivery of the internet content
quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.

Q. What is the difference between Client Side Renderring and Server Side Renderring?
A. server-side rendering is able to display a fully populated page on the first load for any route of the website, whereas client-side rendering displays a blank page first.

Q. What is Progressive Renderring
A.  the technique of sequentially rendering parts of the web page on the server-side and send it to the client in portions without waiting for the entire page to be rendered.”

Q. What is the difference between Preloading and Prefetching resources?
A. 
1. Preload is an early fetch instruction to the browser to request a resource needed for a page (key scripts, Web Fonts, hero images).

2. Prefetch serves a slightly different use case — a future navigation by the user (e.g between views or pages) where fetched resources and requests need to persist across navigations

Q. What are service workers?
A. Service Worker is a script that works on browser background without user interaction independently. 
can track network traffic of the page, manage push notifications and develop “offline first” web applications with Cache API.


