
var restify = require('restify');

var rulesApiClient = restify.createJsonClient({
  url: 'http://rules.api.orionsbelt.eu',
  version: '*'
});

module.exports = {
  rulesApiClient : rulesApiClient
};
