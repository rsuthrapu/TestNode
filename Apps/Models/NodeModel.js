// get config
var config = require('../config');

// connect to the database
var dbconnect = require('../lib/dbconnect')(config);

// define model
// var myModel = Bookshelf.Model.extend({
  // tableName: 'items'
// });

// export collection module
module.exports = NodeModel;