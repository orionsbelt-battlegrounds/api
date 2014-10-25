
var assert = require("assert");
var auth = require("./../../src/logic/auth.js");

describe("validateToken", function() {

  it("works for a correct example", function(next) {
    assert(auth.validateToken({token:"donbonifacio"}).success);
    next();
  });

  it("fails if otken not present", function(next) {
    assert(auth.validateToken().success == false);
    next();
  });

});
