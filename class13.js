// Routing with Express

const express = require('express');
const app = express();

// get method ================
app.get('/home', (req, resp) => {
    resp.send("Welcome to Home Page");
    console.log("Home Page..")
})

app.get('/about', (req, resp) => {
    resp.send("Welcome to About Page");
    console.log("About Page..")
});

// post method==============
app.post('/about', (req, resp) => {
    //    http://localhost:4200/about/?name=neeraj&email=neeraj@gmail.com use this url in thunderclient and then check the output
    console.log("req.query.name  : ", req.query.name)
    // resp.send("Welcome to About Page");
    resp.send(req.query.name);   // check the output in thunderclient
    console.log("About Page..")
})

const server = app.listen(4200, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("my server is working..");
})