module.exports = function eloRoutes(server) {

  var _ = require("underscore");
  var obbElo = require("obb-elo");

  server.get('/elo/calculate', function (req, res, next) {
    var p1 = {
      eloRanking : parseInt(req.query.p1Elo),
      numberOfGames : parseInt(req.query.p1Games),
      battlePoints : parseInt(req.query.p1BattlePoints)
    };
    var p2 = {
      eloRanking : parseInt(req.query.p2Elo),
      numberOfGames : parseInt(req.query.p2Games),
      battlePoints : parseInt(req.query.p2BattlePoints)
    };
    obbElo.calculateElo(p1, p2);
    res.send({ player1 : p1, player2 : p2 });
    return next();
  });

}
