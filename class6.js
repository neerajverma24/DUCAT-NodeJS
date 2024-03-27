
// Topic :  input from command line  =================================================
const fs = require('fs')
const process = require('process')
console.log(process.argv)
/*
// console.log(process);   // output : whole process

// console.log(process.argv);  // ARGV : argument vector

*/


// use command node class6.js neeraj nodejs, then it will give the data in the form of an array... After we can get the data according to out need  process.argv[2] 

// console.log(process.argv[2]);  // output : neeraj


//=============================================================================
// const fs = require('fs')  // declared at the top...
// fs.writeFileSync("xyz.js", "Hello xyz..")    // this is the manual way to create a file

// node class6.js xyz.js "Hello"   (input command)
console.log(process.argv[2]);   // output : xyz.js
console.log(process.argv[3]);   // output : Hello



// making data dynamic :
// here using data from command line : using command :- node class6.js xyz.js "Hello xyz data..."
fs.writeFileSync(process.argv[2], process.argv[3]);
// here new file has been created xyz.js and Hello xyz data... written inside the file