module.exports = function unitRoutes(server) {

  var _ = require("underscore");
  var obbBattleEngine = require("obb-battle-engine");

  function jsonify(unit) {
    var data = _.clone(unit);
    data.movementType = unit.movementType.name;
    return data;
  }

  server.get('/units', function (req, res, next) {
    var units = _.map(obbBattleEngine.units, function mapper(unit) { return unit; });
    var unique = _.unique(units);
    var formatted = [];
    _.each(unique, function process(unit) {
      formatted.push(jsonify(unit));
    });
    res.send(formatted);
    return next();
  });

  server.get('/units/:name', function (req, res, next) {
    var unit = obbBattleEngine.units[req.params.name];
    if(unit) {
      res.send(jsonify(unit));
    } else {
      res.send({error : "Can't find unit '"+req.params.name+"'"});
    }
    return next();
  });

}
