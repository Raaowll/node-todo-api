//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  let database = db.db('TodoApp');

  // database.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo', error);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // database.collection('Users').insertOne({
  //   name: 'Rahul',
  //   age: 26,
  //   location: 'Jaipur'
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo', error);
  //   }

  //   console.log(result.ops);
  // });

  db.close();
});