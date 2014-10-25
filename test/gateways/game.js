
var assert = require("assert");
var gameGateway = require("./../../src/gateways/game.js");

describe("games gateway", function() {

  it("generates a random game", function(next) {
    gameGateway.generateRandom({
      callback : function gameLoaded(result) {
        assert(result.success)
        assert(result.data.game)
        assert(result.data.game.state == "deploy")
        next();
      }
    });
  });

});
