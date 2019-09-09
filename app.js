
var express = require('express'),
    app = express(),
    cors = require("cors"),
    port = process.env.PORT || 8080;
    statusCodes = ["405","500","501","502","503","504"];

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));

app.get('/mockResponse',cors(corsOptions),function(req,res){
    var status = req.headers.status;
    if(statusCodes.indexOf(status) !== -1){
        res.status(status);
        res.end();
    }else{
        res.status(400).json({errorMessage:"Missing or Invalid 5XX Status Code"});
    }
});





