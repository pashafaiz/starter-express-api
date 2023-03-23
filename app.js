const { MongoClient } = require('mongodb');
const url =  "mongodb+srv://theashfaqbhati09:2id7sXkIUZ1fQitl@cluster0.vlv2hzc.mongodb.net/test"
const client = new MongoClient(url);
const dbName = 'AshfaqDataBase';

async function db() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName)
  const collection = db.collection('products');

  return collection;
}

module.exports= db;