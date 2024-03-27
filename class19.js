// Topic : middleware  ==========================

// 1. Application level middleware  ======================

const express = require('express');
const app = express();

const filterData = (req, resp, next) => {
    // console.log('filterData is working...')
    if (!req.query.age) {
        console.log('please enter your age...')
        resp.send('please enter your age...')
    } else if (req.query.age < 18) {
        console.log('You are not eligible...')
        resp.send('You are not eligible...')
    } else {
        console.log('Congrats! you are eligible...')
        resp.send('Congrats! you are eligible...')
        next();
    }
}
app.use(filterData);

app.get('/home', (req, resp) => {
    resp.send('Welcome to Home page');       // http://localhost:4200/home   (/home is the router)
})

app.get('/about', (req, resp) => {
    resp.send('Welcome to About page');      // http://localhost:4200/home   (/about is the router)
})

app.get('/vote', (req, resp) => {
    console.log('Vote req : ', req.query.age);   // http://localhost:4200/vote?age=55
    resp.send('Welcome to Vote page');       // http://localhost:4200/home   (/services is the router)
})


app.listen(4200, () => {
    console.log("my server is working...")
})

