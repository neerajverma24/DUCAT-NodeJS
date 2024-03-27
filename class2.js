const fs = require("fs")
// fs.writeFileSync("abc.js", "Abc Function is Wroking..")
// fs.writeFileSync("neeraj.js", "Example of creating a file by writeFileSync")


// way 2  ========================
// or we can write it as
// const fs = require("fs").writeFileSync;


/*
var a = 2;
var b = 4;
console.log(a, b);

import { x } from './getData'
console.log(x)               (this is wrong way)
*/



// we are importing file from getData.js here... The value of a and b  =====================================================

// const getData1 = require('./getData')
//  console.log(getData1)   // output is object

// console.log(getData1.a)  // output : 2
// console.log(getData1.b)  // output : 4
// console.log(getData1.myFunc())


/* ===============================================
// Next topic : MODULE

// Two types of Module :
//  1. Core Module
// a) Global Module : those module which did not need to import is called Global Module, e.g., console.log()
// b) Non-Global Module

//  2. External Module


// Core Module :
// a) Global Module
// console.log("Neeraj Verma")


// b) Non-Global Module

// console.log(fs)

// console.log(fs.writeFileSync())  node working

fs.writeFileSync("abc.js", "Hello Abc file...")

*/

// This is how can we check  ====================================================

// console.log("Check directory name =>", __dirname)

// console.log("Check file name =>", __filename)

// console.log(fs)