// Topic : To get the specific path of the file
const fs = require('fs');

const path = require('path');
// console.log(path);

// console.log("Directory path", __dirname);
// console.log("File path", __filename);

// creating folder name dataFile to join it with the directory path==============

const pathDir = path.join(__dirname, 'dataFile');
console.log("pathDir of dataFile : ", pathDir);

/*
// create file in by using fs.writeFileSync  =================================

// creating 5 files in the dataFile folder using filename path ===============
for (i = 1; i <= 5; i++) {
    console.log(i)
    // console.log("Checking Path", pathDir + '/' + "abc.js")     
            // here why we need forward slash, check in the terminal or it will create a new file by itself left side  && also check by removing / forward slash

    // fs.writeFileSync(pathDir + '/' + "abc.js", "Hello abc File data ");  // here loop created , but due to the same name of the files only 1 file created i.e last one... 

    // to create 5 different file we have to use "i" of the loop
    fs.writeFileSync(pathDir + '/' + "abc" + i + ".js", "Hello abc File data" + " " + i);
}
*/


// read dir file =======================================

// explaination :  here readdir is read directory , it used callback function and has two parameters , err is for to check the error and file is to read the files, pathDir is for where the Directory exist...
fs.readdir(pathDir, (err, files) => {
    console.log("read file : ", files);
    files.forEach((fileList) => {
        console.log(fileList)
    })
})

