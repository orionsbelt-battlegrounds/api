
var assert = require("assert");
var auth = require("./../../src/logic/auth.js");

describe("validateToken", function() {

  it("works for a correct example", function(next) {
    assert(auth.validateToken("donbonifacio").success);
    next();
  });

});
