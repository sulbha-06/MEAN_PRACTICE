const express = require('express'),

    cors = require('cors'),
    bodyParser = require('body-parser'),
    stattusCodes = require('express-status-codes'),
    mongoose = require('mongoose'),
    apiRoutes = require('./server/routes/apiRoutes'),
    con = require('./server/config/db');



const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', apiRoutes);

app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});