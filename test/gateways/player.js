var assert = require("assert");
var playerGateway = require("./../../src/gateways/player.js");

describe("loadPlayer", function() {

  it("loads a single player", function(next) {
    playerGateway.loadPlayer({
      name: "donbonifacio",
      callback : function playerLoaded(result) {
        assert(result.success)
        assert(result.data.player.name == "donbonifacio")
        next();
      }
    });
  });

});
