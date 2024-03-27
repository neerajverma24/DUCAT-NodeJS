// input from command line

const fs = require('fs');

// process
console.log(process.argv);

// using data from command line
// fs.writeFileSync(process.arvg[2], process.arvg[3]);

/*
// create file ========================
if (process.argv[2] == 'create') {
    fs.writeFileSync(process.argv[3], process.argv[4]);
    console.log("Congratulation your file has been successfully created..")

} else {
    console.log("Please check the command line to create")
}
*/

/*
// remove file ==========================
if (process.argv[2] == 'remove') {
    fs.unlinkSync(process.argv[3], process.argv[4]);
    console.log("Congratulation your file has been successfully removed..")
} else {
    // console.log("Please check the command line to remove")
}
*/

// using above all together =========================
if (process.argv[2] == 'create') {
    fs.writeFileSync(process.argv[3], process.argv[4]);
    console.log("Congratulation your file has been successfully created..")

} else if (process.argv[2] == 'remove') {
    fs.unlinkSync(process.argv[3], process.argv[4]);
    console.log("Congratulation your file has been successfully removed..")
} else {
    console.log("Please check the command line to remove")
}

