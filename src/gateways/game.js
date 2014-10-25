
var config = require("./../../src/config.js");
var result = require("./../../src/logic/result.js");

function generateRandom(args) {
  config.rulesApiClient.get("/game/random", function randomLoaded(err, req, res) {
    args.callback(result.success({
      game : JSON.parse(res.body)
    }));
  });

}

module.exports = {
  generateRandom : generateRandom
};
