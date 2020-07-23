var express = require('express'),
    app = express(),
    port = process.env.PORT || 8008,
    mongoose = require('mongoose'),
    Record = require('./api/models/recordListModel'), //created model loading here
    bodyParser = require('body-parser');

var mongoConnectStr = 'mongodb://localhost/test';

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(mongoConnectStr, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/recordListRoutes'); //importing route
routes(app); //register the route

// App Error Middlewear
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


app.listen(port);


console.log('a record list RESTful API server started on: ' + port);
