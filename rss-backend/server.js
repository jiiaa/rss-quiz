const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const rssRouter = require('./rssroute');
const app = express();

const logger = (req, res, next) => {
    let d = new Date();
    let options = { hour12: false };
    let date = d.toLocaleString('fi-FI', options);
    console.log(`${req.method}@${req.originalUrl} / ${date}`);
    next();
}

// app-level middleware
app.use(cors());
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/api', rssRouter);

var port = process.env.PORT || 3001;
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Now listening at http://%s:%s", host, port);
});