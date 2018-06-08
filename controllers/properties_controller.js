

var db  = require('../models');

exports.index = function(req, res) {
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
  let location = req.params.location;
  //  let location = //"Irvine,CA";//req.body.location;
  console.log("location",location);
  let locationArr = location.split(",");
  let city = locationArr[0];
  let state = locationArr[1];

  db.Property.findAll({
    where: {
      City: city,
      State: state
    }
  }).then(function(dbProperty) {
    console.log(dbProperty);
    res.render('properties/properties', {
      layout: 'main-properties',
      property: dbProperty
    });
  });
};