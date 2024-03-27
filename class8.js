// Topic : File list with file system...

// fs means file system (in Node Js)
const fs = require('fs');
// console.log(fs);


// here , what we are doing is How to create files in the server

// fs.writeFileSync("abcd.js", "Hello abcd file...");


// ==================
if (process.argv[2] == 'create') {
    fs.writeFileSync(process.argv[3], process.argv[4])
    console.log("Congratulations your file has been created....")
} else if (process.argv[2] == 'remove') {
    fs.unlinkSync(process.argv[3]);
    console.log("Congratulations, your file has been removed...")
} else {
    console.log('Please, check your input command...')
}


