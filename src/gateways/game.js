
var MongoClient = require('mongodb').MongoClient;

var config = require("./../../src/config.js");
var result = require("./../../src/logic/result.js");

function generateRandom(args) {
  config.rulesApiClient.get("/game/random", function randomLoaded(err, req, res) {
    args.callback(result.success({
      game : JSON.parse(res.body)
    }));
  });
}

function save(args) {
  var url = 'mongodb://localhost:27017/myproject';
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('games');
    collection.insert(args.game, function(err, res) {
      args.callback(result.success(res.ops[0]));
      db.close();
    });
  });
}

module.exports = {
  generateRandom : generateRandom,
  save : save
};
