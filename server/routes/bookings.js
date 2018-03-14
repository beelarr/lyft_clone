var express = require('express');
var router = express.Router();
var mongoJS = require('mongojs');

var db = mongoJS(
  'mongodb://beelarr:123456@ds215089.mlab.com:15089/ivasap-mobile',
  ['bookings']
);

router.get('/bookings', function(req, res, next) {
  db.bookings.find(function(err, bookings) {
    if (err) {
      res.send(err);
    }
    res.json(bookings);
  });
});
router.post('/bookings', function(req, res, next) {
  var booking = req.body.data;

  if (!booking.userName) {
    res.status(400);
    res.json({
      error: 'Your data is no good here.',
    });
  } else {
    db.bookings.save(booking, function(err, savedBooking) {
      if (err) {
        res.send(err);
      }
      res.json(savedBooking);
    });
  }
});

module.exports = router;
