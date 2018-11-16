//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  let database = db.db('TodoApp');

  // database.collection('Todos').find({ _id: new ObjectID('5bee983e08262dca290dfdb5') }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  //   });

  // database.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos Count: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  database.collection('Users').find({
    name: 'Rahul'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });

  //db.close();
});