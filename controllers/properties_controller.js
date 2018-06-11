

var db  = require('../models');

exports.index = function(req, res) {
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
  let location = req.params.location;
  // console.log("req.body",req);
  // console.log("req.params",req.params);
  // let location = req.body.location;
  //  let location = //"Irvine,CA";//req.body.location;
  console.log("location",location);
  let locationArr = location.split(",");
  let city = locationArr[0];
  let state = locationArr[1];

  // db.Property.findAll({
  //   where: {
  //     City: city,
  //     State: state
  //   }
  // }).then(function(dbProperty) {
  //   console.log(dbProperty);
  //   res.render('properties/properties', {
  //     layout: 'main-properties',
  //     property: dbProperty
  //   });
  // });
  console.log(city);
  console.log(state);
  // console.log(res);
  // res.render('properties/properties');
  //, {
    //       layout: 'main-properties',
    //       city:city
       // });
     db.Property.findAll({
    where: {
      City: city,
      State: state
    }
  }).then(function(dbProperty) {
    console.log(dbProperty);
  
    res.render('properties/properties', {
      
      property: dbProperty
    });
  });
  // res.render('properties/properties', {
  //       res.json(dbProperty);
  //       city:city
  //     });
  //  res.redirect('/locations/properties');
  // res.render('properties/properties', {
  //   city: city,
  //   state: state
  // }, function(err, html){
  //   if (err) { console.err("ERR", err) }
    
  // });
  // res.status(500).send();



  console.log("after rendering");
};


// exports.show = function(req, res) {
//   console.log("######################4");
//   let properties = req.params.properties;
//   console.log(properties);
//   res.render('properties/properties');
//   // res.render('properties/properties', {
//   //     layout: 'main-properties',
//   //     property: properties
//   //   });
//   // console.log("req.body",req);
//   // console.log("req.params",req.params);
//   // let location = req.body.location;
  
// };
