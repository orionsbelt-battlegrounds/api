module.exports = function indexRoutes(server) {

  var package = require('../../package.json');

  server.get('/', function (req, res, next) {
    res.send({ name : package.name, version : package.version });
  });

}
