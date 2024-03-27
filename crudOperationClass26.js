// CRUD  ===========================================

const dbConnectFunc = require("./mongodb")

async function getData() {
    const getDBConnect = dbConnectFunc();
    // console.log("getDBConnect : ". await getDBConnect)

    const getCollection = await getDBConnect;

    // Read Data ======================================
    // console.log("get collection data :", await getCollection.find().toArray())

    // to find / get the data stored in the collection :
    // console.log("get Collection data : ", await getCollection.find({ studentName: "Neeraj" }).toArray())

    // CREATE DATA ====================================
    // console.log("get Collection data : ", await getCollection.insertOne({ studentName: "Vijay LAxmi", studentCourse: "MERN Full Stack" }));


    // UPDATE DATA =====================================
    // console.log("get Collection data : ", await getCollection.updateOne({ studentName: "Vijay LAxmi" }, { $set: { studentCourse: "JavaScript + MERN Full Stack" } }));


    // DELETE DATA =======================================
    console.log("get Collection data : ", await getCollection.deleteOne({ studentName: "Vijay LAxmi" }));

}

getData();


// another way : ==============================
/*

async function deleteData() {
    const getDBConnect = dbConnectFunc();


    const getCollection = await getDBConnect;

    console.log("get Collection data : ", await getCollection.deleteOne({ studentName: "Vijay LAxmi" }))
}
deleteData();

*/