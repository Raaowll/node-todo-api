const mongoose = require('mongoose');

// UserModel
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
    unique: true,
    validate: {
      validator: (value) => {

      },
      message: '{VALUE} is not a valid email'
    }
  }
});

module.exports = { User };