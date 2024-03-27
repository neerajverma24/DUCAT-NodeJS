// similar with class20.js ...... bs export karwa rahe hai yaha file....

const express = require('express');
const app = express();

// importing Route Level middleware file 
const filterData = require('./middleWare');

app.get('/home', (req, resp) => {
    resp.send('Welcome to Home page');       // http://localhost:4200/home   (/home is the router)
})

app.get('/about', (req, resp) => {
    resp.send('Welcome to About page');      // http://localhost:4200/home   (/about is the router)
})

app.get('/vote', filterData, (req, resp) => {
    console.log('Vote req : ', req.query.age);   // http://localhost:4200/vote?age=55
    resp.send('Welcome to Vote page');       // http://localhost:4200/home   (/services is the router)
})


app.listen(4200, () => {
    console.log("my server is working...")
})
