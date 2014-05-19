// ERRORS, GOTTA CATCH 'EM ALL
var domain = require('domain').create();
domain.on('error', function(err){
    console.log('Application Error: ' + err.message);
});
domain.run(function(){
	var express = require('express');
    var app = express();
    app.use('/', express.static('./static'));
    var port = process.env.PORT || 1337;
    app.listen(port);
    console.log("App running on http://localhost:"+port);
});