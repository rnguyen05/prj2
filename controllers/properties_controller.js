var db  = require('../models');

exports.index = function(req, res) {
  console.log("in properties  controler");
  db.Property.findAll({
    where: {
      location: req.params.location
    }
  }).then(function(dbProperty) {
    console.log(dbProperty);
    res.render('properties/properties', {
      layout: 'main-properties',
      property: dbProperty
    });
  });
};