// How Node JS works

/*
// synchronous
console.log("Task A")   // 5ms
console.log("Task B")   // 2 ms
console.log("Task C")   // 4 ms
console.log("Task D")   // 0 ms
*/

/*
// Asynchronous
setTimeout(() => {
    console.log("Task A")
}, 5000)

setTimeout(() => {
    console.log("Task B")
}, 2000)

setTimeout(() => {
    console.log("Task C")
}, 4000)

setTimeout(() => {
    console.log("Task D")
}, 0)

console.log("Task E");
*/

// var a = 1;
// var b = 2;

// var b = 5;
// console.log(a+b);

//=================================================
var a = 1;
var b = 2;
const getPromiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
        var b = 5;
        console.log("setTimeout b : ", b);  //5
        console.log(a + b);   // 6
        resolve(b)
    }, 2000)

})

getPromiseData.then((getData) => {
    console.log("getData", getData);  // 5
    var b = getData;
    console.log(a + b); // 6
})
