const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Create a new MongoClient
const client = new MongoClient(url);
// Database Name
const dbName = 'eggcms';




// Use connect method to connect to the Server
const findData = () => {
  return new Promise((resolve, reject) => {
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
    
      const db = client.db(dbName);
      findDocuments(db, (docs) => {
        resolve(docs)
      })
      client.close();
    });
  })
}

// 查询表数据函数

function findDocuments(db, callback) {
  // Get the documents collection
  const collection = db.collection('userList');
  // Find some documents
  collection.find().toArray(function(err, docs) {
    assert.equal(err, null);
    // console.log(docs);
    callback(docs);
  });
}

// insert 数据
const addData = (data) => {
  return new Promise((resolve, reject) => {
    client.connect(function(err) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
    
      const db = client.db(dbName);
      insertDocuments(db,data,(docs) => {
        resolve(docs)
      })
      client.close();
    });
  })
}


function insertDocuments(db, data, callback) {
  // Get the documents collection
  const collection = db.collection('userList');
  // Find some documents
  collection.insertOne(data, function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    callback(result);
  })
}
module.exports = {
  findData,
  addData
}
