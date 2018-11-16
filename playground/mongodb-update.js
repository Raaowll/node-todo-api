//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  let database = db.db('TodoApp');

  database.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5beea22c08262dca290e005c')
  }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  //db.close();
});