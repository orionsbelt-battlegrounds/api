var assert = require("assert");
var _ = require('underscore');
var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://127.0.0.1:3000',
  version: '*'
});

describe("routes", function() {

  describe("elo", function() {

    it("/elo/calculate is ok", function(next) {
      var queryP1 = "p1Elo=1000&p1Games=10&p1BattlePoints=100";
      var queryP2 = "p2Elo=1000&p2Games=10&p2BattlePoints=90";
      client.get('/elo/calculate?' + queryP1 + '&' + queryP2, function(err, req, res, data) {
        assert.notEqual(data.player1.eloRanking, 1000);
        assert.notEqual(data.player2.eloRanking, 1000);
        next();
      })
    })

  })

})

