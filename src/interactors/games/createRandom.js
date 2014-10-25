
var config = require("./../../../src/config.js");
var result = require("./../../../src/logic/result.js");
var auth = require("./../../../src/logic/auth.js");
var playerGateway = require("./../../../src/gateways/player.js");

function run(args) {
  var tokenResult = auth.validateToken(args);
  if(!tokenResult.success) {
    return args.callback(tokenResult);
  }
  args.callback(result.success());
}

module.exports = {
  run : run
};
