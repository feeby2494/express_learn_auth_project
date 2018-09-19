var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// create odject with form input});
const userData = {
  email: req.body.email,
  name: req.body.name,
  favoriteCar: req.body.favoriteCar,
  password: req.body.password
};


// var UserSchema = new mongoose.Schema({
//   //had user input fields in it, but not using Mongoose!
//
// });

// // hash password before saving to database
// UserSchema.pre('save', function(next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function(err, hash) {
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   });
// });

// var User = mongoose.model('User', UserSchema);
module.exports = userData;
