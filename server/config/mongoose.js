var mongoose = require('mongoose');
var crypto = require('crypto');

module.exports = function (config) {
  mongoose.connect(config.db, {useMongoClient: true});

  mongoose.Promise = global.Promise;
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function () {
    console.log('multivision db opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]
  });
  userSchema.methods = {
    authenticate: function (passwordToMatch) {
      return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  };
  var User = mongoose.model('User', userSchema);
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      [
        {firstName: 'Ben', lastName: 'Anderson'},
        {firstName: 'Ann', lastName: 'Johns'},
        {firstName: 'Mary', lastName: 'Angela'}
      ].forEach(function (user, idx) {
        var username = user.firstName.toLowerCase();
        var salt = createSalt();
        var roles = idx === 1 ? ["admin"] : [];
        User.create({
          firstName: user.firstName,
          lastName: user.lastName,
          username: username,
          salt: salt,
          hashed_pwd: hashPwd(salt, username),
          roles: roles
        });
      });
    }
  });
}

function createSalt () {
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd (salt, pwd) {
  var hmac = crypto.createHmac('sha256', salt);
  return hmac.update(pwd).digest('hex');
}