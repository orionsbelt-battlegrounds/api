
var assert = require("assert");
var createRandom = require("./../../../src/interactors/games/createRandom.js");

describe("games: createRandom", function() {

  it("simple working example", function(next) {
    createRandom.run({
      token : "donbonifacio",
      p1 : "donbonifacio",
      p2 : "pyro",
      callback : function(result) {
        assert(result.success == true, JSON.stringify(result));
        assert(result.data.p1, JSON.stringify(result));
        assert(result.data.p2, JSON.stringify(result));
        assert(result.data.game, JSON.stringify(result));
        next();
      }
    });
  })

  it("no token fails", function(next) {
    createRandom.run({
      callback : function(result) {
        assert(result.success == false);
        next();
      }
    });
  })

})

