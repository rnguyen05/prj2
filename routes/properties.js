var express = require('express');
var router  = express.Router();

var properties_controller = require('../controllers/properties_controller');
//var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/location/:location',  properties_controller.index);

// router.get('/properties/:properties', properties_controller.show);


module.exports = router;