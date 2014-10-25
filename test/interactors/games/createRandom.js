
var assert = require("assert");
var createRandom = require("./../../../src/interactors/games/createRandom.js");

describe("games: createRandom", function() {

  it("simple working example", function(next) {
    createRandom.run({
      token : "donbonifacio",
      callback : function(result) {
        assert(result.success == true);
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

