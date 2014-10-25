
var result = require("./../../src/logic/result.js");

function loadPlayer(args) {
  args.callback(result.success({
    player : {
      name : args.name
    }
  }));
}

module.exports = {
  loadPlayer : loadPlayer
};
