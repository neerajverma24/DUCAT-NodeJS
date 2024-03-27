// How to connect node with mongodb

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'students';

async function dbConnectFunc() {
    // Use connect method to connect to the server
    await client.connect();
    // console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('userinfo');

    // the following code examples can be pasted here...
    // console.log("get Collection : ", collection)

    // to find / get the data stored in the collection :
    console.log("get Collection data : ", await collection.find().toArray())  // if we dont write await here, it will show Promise {<pending>}      // output : all the array of docs stored in mongodb   

    return 'done.';
}
dbConnectFunc()