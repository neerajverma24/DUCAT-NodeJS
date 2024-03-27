const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public')   // Public Folder
console.log(publicPath);

// app.use(express.static(publicPath));  // http://localhost:4200/Home.html   to check

app.get('/home', (req, resp) => {
    resp.sendFile(`${publicPath}/home.html`);       // http://localhost:4200/home   (/home is the router)
})

app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`);       // http://localhost:4200/home   (/about is the router)
})

app.get('/services', (req, resp) => {
    resp.sendFile(`${publicPath}/services.html`);       // http://localhost:4200/home   (/services is the router)
})


app.listen(4200, () => {
    console.log("my server is working...")
})