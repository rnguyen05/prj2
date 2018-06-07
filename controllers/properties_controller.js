var db  = require('../models');

exports.index = function(req, res) {
  db.Property.findAll({
    where: {
      location: req.body.location
    }
  }).then(function(dbProperty) {
    console.log(dbProperty);
    res.render('properties/properties', {
      layout: 'main-properties',
      property: dbProperty
    });
  });
};