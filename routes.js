

module.exports = function(app){
            var application = require('./routes/application');
            //var users = require('./routes/users');
            //var searchproperties = require('./routes/searchproperties');
            
            app.use('/', application);
            //app.use('/users', users);
            //app.use('/searchproperties', searchproperties);
}