var mongoose = require('mongoose');
var encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type: String, required: '{PATH} is required!'},
  lastName: {type: String, required: '{PATH} is required!'},
  username: {
    type: String,
    required: '{PATH} is required!',
    unique: true
  },
  salt: {type: String, required: '{PATH} is required!'},
  hashed_pwd: {type: String, required: '{PATH} is required!'},
  roles: [String]
});
userSchema.methods = {
  authenticate: function (passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  }
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers () {
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      [
        {firstName: 'Ben', lastName: 'Anderson'},
        {firstName: 'Ann', lastName: 'Johns'},
        {firstName: 'Mary', lastName: 'Angela'}
      ].forEach(function (user, idx) {
        var username = user.firstName.toLowerCase();
        var salt = encrypt.createSalt();
        var roles = idx === 1 ? ["admin"] : [];
        User.create({
          firstName: user.firstName,
          lastName: user.lastName,
          username: username,
          salt: salt,
          hashed_pwd: encrypt.hashPwd(salt, username),
          roles: roles
        });
      });
    }
  });
}

exports.createDefaultUsers = createDefaultUsers;