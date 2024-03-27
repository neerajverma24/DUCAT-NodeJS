// CRUD with file system

// create  ====================

const fs = require("fs");

const path = require("path")

const getDirPath = path.join(__dirname, 'crudFile');  // first we have to create a folder name: crudFile
const getFilePath = getDirPath + "/" + "abc.js";
console.log(getDirPath);
/*

// to create

fs.writeFileSync(getDirPath + "/" + "abc.js", "Hello CRUD file");


// read =============

fs.readFile(getFilePath, 'utf8', (err, fileData) => {
    // console.log("Error : ", err);  // output : null
    // console.log(fileData); // output :  buffer without using 'utf8'
    // console.log(fileData); // output : Hello CRUD File with using 'utf8'

    if (!err) {
        console.log(fileData);  // output  : Hello CRUD file
    } else {
        console.log("Please check your input command..")
    }
});
*/

// update ================== (separate comment whole above part )


/*
fs.appendFile(getFilePath, 'Welcome to Node JS', (err, fileData) => {
    if (!err) {
        console.log("Your File has been updated...");    // output  : Hello CRUD file
    } else {
        console.log("Please check your input command..")
    }
});

*/
// rename file =============================
/*
fs.rename(getFilePath, getDirPath + '/' + "abcFileRename.js", (err) => {
    if (!err) {
        console.log("Your File has been rename...");  // output  : Hello CRUD file
    } else {
        console.log("Please check your input command..")
    }
});
*/

// delete file =======================

fs.unlinkSync(getDirPath + '/' + 'abcFileRename.js', (err) => {
    if (!err) {
        console.log("your file has been deleted")
    } else {
        console.log("err : ", err);
    }
});

