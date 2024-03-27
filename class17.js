const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public')   // Public Folder
console.log(publicPath);

app.set('view engine', 'ejs',);    // only 'views' naam ka hi folder banna chahiye warna EJS nahi chalega

app.get('/services', (req, resp) => {
    const studentDetails = {
        studentName: "Neeraj",
        studentEmail: "neeraj@gmail.com",
        studentCourse: "MERN full stack",
        studentContact: 9711330353
    }

    resp.render('services', { studentDetails })       // http://localhost:4200/services   (/services is the router)
})


app.listen(4200, () => {
    console.log("my server is working...")
})