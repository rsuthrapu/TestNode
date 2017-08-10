var myModel = require('../Models/NodeModel');

module.exports = {
 
  // GET /items/:id
  getItem: function(req, res, next) {
    var id = req.params.id;
    myModel.forge({id: id})
    .fetch()
    .then(function (model) {
      res.json(model.toJSON());
    })
    .otherwise(function (error) {
      res.status(500).json({msg: error.message});
    });
  },
  // POST /items
  // (Don't forget to validate and sanitize all user input)
  saveItem: function(req, res, next) {
    myModel.forge(req.body)
    .save()
    .then(function (model) {
      res.json(model.toJSON());
    })
    .otherwise(function (error) {
      res.status(500).json({msg: error.message});
    });
  }
};