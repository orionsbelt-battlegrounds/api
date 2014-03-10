var assert = require("assert");
var _ = require('underscore');
var package = require("./../../package.json");
var restify = require('restify');
var obbBattleEngine = require("obb-battle-engine");
var units = _.map(obbBattleEngine.units, function(unit) { return unit; });
var movementTypes = ['allMovement', 'frontMovement', 'diagonalMovement', 'normalMovement'];

var client = restify.createJsonClient({
  url: 'http://127.0.0.1:3000',
  version: '*'
});

describe("routes", function() {

  describe("units", function() {

    function assertUnit(unit, data) {
      assert.equal(data.name, unit.name);
      assert(_.contains(movementTypes, data.movementType), "Can't resolve movement type '"+data.movementType+"'");
    }

    it("/units is ok", function(next) {
      client.get('/units', function(err, req, res, data) {
        assert.equal(data.length, units.length);
        _.each(data, function process(unitData) {
          var unit = obbBattleEngine.units[unitData.name];
          assertUnit(unit, unitData);
        });
        next();
      })
    })

    it("provides an error for units not found", function(next) {
      client.get('/units/waza', function(err, req, res, data) {
        assert(data.error);
        next();
      })
    })

    _.each(units, function process(unit) {
      var unitPath = "/units/" + unit.name;
      it(unitPath + " is ok", function(next) {
        client.get(unitPath, function(err, req, res, data) {
          assertUnit(unit, data);
          next();
        })
      })
    })

  })

})

