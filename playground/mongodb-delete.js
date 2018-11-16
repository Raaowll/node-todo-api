//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  let database = db.db('TodoApp');

  // DeleteMany
  // database.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // DeleteOne
  // database.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // FindOneAndDelete
  database.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    console.log(result);
  });

  //db.close();
});