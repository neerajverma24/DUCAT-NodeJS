//Topic :   Render HTML in Node JS

const express = require('express');
const app = express();

app.get('', (req, resp) => {
    console.log(req.query.name);
    resp.send(`
    <input type="text" placeholder="enter your detail" value=${req.query.name}/>  
    <button>Click me </button> <br />
    <a href = '/about' >Go to About page</a>


    `);  // http://localhost:4200/?name=%22neeraj%22   (to get the name inside the input)
    console.log("Home Page..")
})


app.get('/about', (req, resp) => {
    console.log("req.query :", req.query)
    resp.send(
        [
            {
                name: "neeraj",
                email: "neeraj@gmail.com"
            },
            {
                name: "rahul",
                email: "rahul@gmail.com"
            }
        ]

    );
    console.log("About Page..")
})

app.listen(4200);