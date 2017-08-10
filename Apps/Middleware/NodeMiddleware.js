//Routes are responsible for handling traffic and connecting it to the appropriate controllers, for example, if a user requests for one item, the job of a router would be to direct 
//the request to the getItem method of the NodeController.

var express = require('express');

var nodecontroller = require('../controllers/NodeController');

module.exports = function () {
  var router = express.Router();
  router.get('/items/:id', nodecontroller.getItem);
  router.post('/items', nodecontroller.saveItem);
 
  return router;
};