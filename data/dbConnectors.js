const mongoose = require ('mongoose');


mongoose.Promise = global.Promise ;

mongoose.connect('mongodb://localhost:27017',{
  useMongoClient: true
});

const friendSchema = new mongoose.Schema({

  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String

  },
  language: {
    type: String

  },
  age: {
    type: Number

  },
  email: {
    type: String

  },
  contacts: {
    type: Array

  }
});

const Friends = mongoose.model('friends', friendSchema);

module.exports = { Friends };
