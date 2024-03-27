// Topoic : npm install -g nodemon
// run karte time baar run nahi karna padhta, bs save karo changes ho jate hai

// console.log("Hello Student, Node js, Neeraj");

/*
// Topic : Simple API ==============================

const http = require('http');
// console.log(http)
http.createServer((req, resp) => {
    resp.write("Hello Student");
    console.log("Server is working");
    resp.end()
}).listen(4200)
*/

/*
//==========================================

const http = require('http');
// console.log(http)
http.createServer((req, resp) => {
    // resp.write("Hello Student");
    console.log("Server is working");
    resp.writeHead(200, { 'Content-type': 'application\json' });

    // { name: "Neeraj", course : "MERN stack" }
    resp.write(JSON.stringify([{ name: "Neeraj", course: "MERN stack" }, { name: "vicky", course: "MEAN Stack" }]));
    resp.end();
}).listen(4200);

*/