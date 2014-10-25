
var result = require("./result.js");

function validateToken(args) {
  if(args == null || args.token == null) {
    return result.fail("NoToken");
  }
  return result.success();
}

module.exports = {
  validateToken : validateToken
};
