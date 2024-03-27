/*
//Topic :  basic server in node js =====================================================================================================

const http = require('http')
console.log(http);

// http.createServer().listen(4000);
// console.log("my server is working at port 4000 port..")


http.createServer((request, response) => {
    response.write("response server is working..")
    console.log("my server is working at port 4000 port..")
    response.end();  // do not forget to write this, to get the output at the localhost:4000
}).listen(4000);
*/

/*
// Practice by own

const http = require('http')
console.log(http);

// http.createServer().listen(5000);
// console.log("local host 5000");

http.createServer((req, resp) => {
    resp.write("Response is working");
    console.log("Server is working at 5000..")
    resp.end();
}).listen(5000)
*/


/*
// creating server my own part 3
const http = require('http');
http.createServer((req, resp) => {
    resp.write("Our server is working")
    console.log("Server is working in local host")
    resp.end();
}).listen(5000);     // server is working successfully...
*/


// ================================================================
// Topic : creating package.json
// write   npm init   in terminal 


/*
// ==========================================
//Topic : console colors

var colors = require('colors')   // this is how we import npm modules using require keyword in node js
// console.log(colors)
// console.log("Hello".red);
console.log("Rainbow Colors".rainbow);

console.log(colors.underline.red("Hello Students"));

console.log("Hello Students".bgCyan);

console.log("Trap Text".trap)       // output : ŦɌĄǷ ŦĕӽŁ

console.log("Node JS".red.bgWhite)  // red is for text and bgWhite is the background color
*/