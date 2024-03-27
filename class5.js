// using/ importing data from the another file (i.e, ApiData.js)

const http = require('http');
const ApiData = require('./ApiData')
// console.log(http)
http.createServer((req, resp) => {
    // resp.write("Hello Student");
    console.log("Server is working");
    resp.writeHead(200, { 'Content-type': 'application\json' });

    // {name : "Neeraj", course : "MERN stack"}
    resp.write(JSON.stringify(ApiData));
    resp.end();
}).listen(4400);


