var express = require('express');
var router  = express.Router();

var properties_controller = require('../controllers/properties_controller');
//var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/location', properties_controller.index);



module.exports = router;