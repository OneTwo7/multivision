var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  "development": {
    rootPath: rootPath,
    db: "mongodb://localhost/multivision",
    port: process.env.PORT || 3030
  },
  "production": {
    rootPath: rootPath,
    db: process.env.MLAB_URI,
    port: process.env.PORT || 80
  }
}