var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var bookings = require('./routes/bookings');
var nurseLocationSocket = require('./routes/nurseLocation');
var nurseLocation = require('./routes/nurseLocation');

var app = express();

var port = 3000;

var socket = require('socket.io');
var io = socket();

//Views

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes

app.use('/', index);
app.use('/api', bookings);
app.use('/api', nurseLocationSocket);
app.use('/api', nurseLocation);

//Socket

io.listen(
  app.listen(port, function() {
    console.log('Server running on port', port);
  })
);
