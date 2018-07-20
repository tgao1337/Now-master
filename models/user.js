const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //Change to bcryptjs for windows (Install bcryptjs)
const Schema = mongoose.Schema;
var allUsers = ['takenUsername'];

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }
});

UserSchema.pre('save', function(next) {
  let user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    bcrypt.hash(user.confirmPassword, 10, function (err, hash) {
      if (err) return next(err);
      user.confirmPassword = hash;
      next();
    });
  });
});

UserSchema.statics.authenticate = function(username, password, next) {
  User.findOne({ username }).exec(function (err, user) {
    if (err) {
      return next(err);
    } else if (!user) {
      var err = new Error('User not found!');
      err.status = 401;
      return next(err);
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        return next(null, user);
      } else {
        return next();
      }
    });
  });
}

const User = mongoose.model('User', UserSchema);
module.exports = User;
