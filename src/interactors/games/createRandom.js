
var async = require("async");
var config = require("./../../../src/config.js");
var result = require("./../../../src/logic/result.js");
var auth = require("./../../../src/logic/auth.js");
var playerGateway = require("./../../../src/gateways/player.js");
var gameGateway = require("./../../../src/gateways/game.js");

function run(args) {
  var tokenResult = auth.validateToken(args);
  if(!tokenResult.success) {
    return args.callback(tokenResult);
  }

  var p1 = args.p1;
  var p2 = args.p2;

  async.parallel({
    player1 : function(cb) {playerGateway.loadPlayer({name:p1,callback:result.nodeCallback(cb)});},
    player2 : function(cb) {playerGateway.loadPlayer({name:p2,callback:result.nodeCallback(cb)});},
    game : function(cb) {gameGateway.generateRandom({callback:result.nodeCallback(cb)});}
  },
  function afterAll(err, results) {
    if(err) {
      return args.callback(result.fail(err));
    }
    args.callback(result.success(results));
  });
}

module.exports = {
  run : run
};
