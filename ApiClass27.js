const express = require('express')
const dbConnectFunc = require('./mongodb')

const app = express();

const mongodb = require('mongodb');  // database wala

app.use(express.json());        // used in POST METHOD
/*
// GET METHOD
app.get("", async (req, resp) => {
    const getCollection = await dbConnectFunc()
    // console.log(getCollection.find({}).toArray())
    // resp.send({ studentName: "Neeraj" })

    const getUserInfo = await getCollection.find({}).toArray()
    resp.send(getUserInfo);
})
*/

/*
// POST METHOD
app.post("", async (req, resp) => {
    console.log("req.body", req.body)       // use thunder client for this
    // resp.send({ message, "Post Method is working.."})
    const getCollection = await dbConnectFunc()
    // console.log(getCollection.find({}).toArray())


    // const getUserInfo = await getCollection.find({}).toArray()

    const getUserInfo = await getCollection.insertMany(req.body)
    resp.send(getUserInfo);
})
*/

/*
// PUT METHOD  : 
app.put("", async (req, resp) => {
    console.log("req.body", req.body)       // use thunder client for this
    const getCollection = await dbConnectFunc()

    const getUserInfo = await getCollection.updateOne({ studentName: "Neeraj" }, { $set: req.body })  // write the name which we have to update in thunder client body
    resp.send(getUserInfo);
})
*/

// DELETE METHOD :
app.delete("/:id", async (req, resp) => {

    // console.log("req.body", req.body)       // use thunder client for this
    console.log(req.params.id)
    const getCollection = await dbConnectFunc()

    const getDeleteInfo = await getCollection.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    resp.send(getDeleteInfo);
})


app.listen(4200, () => {
    console.log("Server is working...")
})
