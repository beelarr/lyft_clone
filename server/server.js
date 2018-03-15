var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var bookings = require('./routes/bookings');

var app = express();

var port = 3000;

var socket = require('socket.io');
var io = socket();

app.listen(port, function() {
  console.log('Server running on port', port);
});

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

//Socket

// io.listen(
//   app.listen(port, function() {
//     console.log('Server running on port', port);
//   })
// );

// var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var bookings = require('./routes/bookings');
var nurseLocationSocket = require('./routes/nurseLocation');
var nurseLocation = require('./routes/nurseLocation');
//
// server.listen(3000);
//
// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });
//
app.use('/api', nurseLocationSocket);
app.use('/api', nurseLocation);
//
io.on('connection', function(socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function(data) {
    console.log('data', data);
  });
});
