const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public')   // Public Folder
console.log(publicPath);

app.set('view engine', 'ejs',);    // only 'views' naam ka hi folder banna chahiye warna EJS nahi chalega

app.get('/services', (req, resp) => {
    resp.render('services')       // http://localhost:4200/home   (/home is the router)
})


app.listen(4200, () => {
    console.log("my server is working...")
})