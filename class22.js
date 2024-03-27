// Group level middleware  ===============

// similar with class20.js ...... bs export karwa rahe hai yaha file....

const express = require('express');
const app = express();

const route = express.Router();
// importing Route Level middleware file 
const filterData = require('./middleWare');

route.use(filterData);          // THIS IS MAIN IN GROUP LEVEL MIDDLEWARE

app.get('/home', (req, resp) => {
    resp.send('Welcome to Home page');       // http://localhost:4200/home   (/home is the router)
})

route.get('/about', (req, resp) => {
    resp.send('Welcome to About page');      // http://localhost:4200/home   (/about is the router)
})

route.get('/vote', filterData, (req, resp) => {
    console.log('Vote req : ', req.query.age);   // http://localhost:4200/vote?age=55
    resp.send('Welcome to Vote page');       // http://localhost:4200/vote  (/vote is the router)
})

app.use(route);         // here this is use to end the group level middleware, otherwise it will throw an error...

app.listen(4200, () => {
    console.log("my server is working...")
})
