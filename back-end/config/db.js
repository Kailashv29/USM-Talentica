const appRoot = require('app-root-path');
const config = require(appRoot + '/config/development');
const {
  MongoClient
} = require('mongodb');

module.exports.init = function (callback) {
  MongoClient.connect(config.url, {
    useNewUrlParser: true
  }, function (err, client) {
    module.exports.client = client.db(config.databaseName);
    callback(err);
  });
};