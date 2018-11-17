var mongoose = require('mongoose');

// ToDO Model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// // newTodo.save().then((doc) => {
// //   console.log('Saved todo', doc);
// // }, (error) => {
// //   console.log('Unable to save todo');
// // });

// var otherTodo = new Todo({
//   text: '  Edit this video',
//   // completed: true,
//   // completedAt: 123
// })

// // otherTodo.save().then((doc) => {
// //   console.log(JSON.stringify(doc, undefined, 2));
// // }, (error) => {
// //   console.log('Unable to save todo', error);
// //   });

// var newUser = new User({
//   email: 'rahulm.bw@gmail.com'
// });

// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error) => {
//   console.log('Unable to save User', error);
// });

module.exports = { Todo };