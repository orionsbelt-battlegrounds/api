module.exports = function unitRoutes(server) {

  var _ = require("underscore");
  var obbBattleEngine = require("obb-battle-engine");

  server.get('/units', function (req, res, next) {
    var units = _.map(obbBattleEngine.units, function mapper(unit) { return unit; });
    res.send(_.unique(units));
    return next();
  });

  server.get('/units/:name', function (req, res, next) {
    var unit = obbBattleEngine.units[req.params.name];
    if(unit) {
      res.send(unit);
    } else {
      res.send({error : "Can't find unit '"+req.params.name+"'"});
    }
    return next();
  });

}
