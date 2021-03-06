
if(process.env.NEW_RELIC_LICENSE_KEY) {
  require('newrelic');
}

var package = require('./package.json');
var restify = require('restify');

var server = restify.createServer({ name: package.name + " " + package.version })
server.use(restify.fullResponse())
server.use(restify.bodyParser());
server.use(restify.queryParser());

require('./src/routes/index.js')(server);
require('./src/routes/units.js')(server);
require('./src/routes/elo.js')(server);

server.listen(process.env.PORT || 3000, function () {
 console.log('%s listening at %s', server.name, server.url)
});

