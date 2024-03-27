// Express JS  :  creating server

/*
const express = require('express');
const app = express();
// console.log(app);

app.get('', (req, resp) => {
    resp.send("Hello Students");
    console.log("My Server is working...")
})


app.get('/home', (req, resp) => {
    resp.send("Welcome to Home page");
    console.log("Home Page...")
})


app.get('/about', (req, resp) => {
    resp.send("Welcome to About page");
    console.log("About Page...")
})


app.get('/contact', (req, resp) => {
    resp.send("Welcome to Contact page");
    console.log("Contact Page...")
})

// this is way 1 to create a local server
app.listen(4200);

*/

// another way to create server

const express = require('express');
const app = express();
// console.log(app);

app.get('', (req, resp) => {
    resp.send("Hello Students");
    console.log("My Server is working...")
})


app.get('/home', (req, resp) => {
    resp.send("Welcome to Home page");
    console.log("Home Page...")
})


app.get('/about', (req, resp) => {
    resp.send("Welcome to About page");
    console.log("About Page...")
})


app.get('/contact', (req, resp) => {
    resp.send("Welcome to Contact page");
    console.log("Contact Page...")
})

const server = app.listen(4200, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("my server is working at : ", host, port);
})