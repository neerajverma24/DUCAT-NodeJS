const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'students';

async function dbConnectFunc() {
    // Use connect method to connect to the server
    await client.connect();
    // console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db.collection('userinfo');
}
module.exports = dbConnectFunc;