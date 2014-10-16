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

    function assertUnit(data) {
      assert((typeof data.name) == "string");
    }

    it("/units is ok", function(next) {
      client.get('/units', function(err, req, res, data) {
        _.each(data, function process(unitData) {
          assertUnit(unitData);
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


    it("provides specific unit data", function(next) {
      client.get('/units/rain', function(err, req, res, data) {
        assertUnit(data);
        next();
      })
    })
  })

})

