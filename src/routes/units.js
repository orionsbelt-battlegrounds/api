module.exports = function unitRoutes(server) {

  var restify = require('restify');
  var _ = require("underscore");
  var obbBattleEngine = require("obb-battle-engine");
  var rules = restify.createJsonClient({
    url: 'http://rules.api.orionsbelt.eu',
    version: '*'
  });

  server.get('/units', function (req, res, next) {
    rules.get('/units', function(err, rulesreq, rulesres, data) {
      res.send(data);
      return next();
    });
  });

  server.get('/units/:name', function (req, res, next) {
    rules.get('/units/'+req.params.name, function(err, rulesreq, rulesres, data) {
      res.send(data);
      return next();
    });
  });

}
