var assert = require("assert");
var package = require("./../../package.json");
var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://127.0.0.1:3000',
  version: '*'
});

describe("routes", function() {

  describe("index", function() {

    it("request to '/' yields name and version", function(next) {
      client.get('/', function(err, req, res, data) {
        assert.equal(package.name, data.name);
        assert.equal(package.version, data.version);
        next();
      })
    })

  })

})

