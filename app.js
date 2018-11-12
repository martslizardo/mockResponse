
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;
    statusCodes = ["500","501","502","503","504"];

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);



app.all('/mockResponse',function(req,res){
    var status = req.headers.status;
    if(statusCodes.indexOf(status) !== -1){
        res.status(status);
        res.end();
    }else{
        res.status(400).json({errorMessage:"Missing or Invalid 5XX Status Code"});
    }
});





