module.exports = function unitRoutes(server) {

  var _ = require("underscore");
  //var obbBattleEngine = require("obb-battle-engine");

  server.get('/units', function (req, res, next) {
    //var units = _.map(obbBattleEngine.units, function mapper(unit) { return unit; });
    //res.send(units);
  });

}
