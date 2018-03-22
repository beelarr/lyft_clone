const express = require('express');
const router = express.Router();
const mongoJS = require('mongojs');

const db = mongoJS(
  'mongodb://beelarr:123456@ds215089.mlab.com:15089/ivasap-mobile',
  ['bookings']
);

router.get('/bookings', (req, res, next) => {
  db.bookings.find(function(err, bookings) {
    if (err) {
      res.send(err);
    }
    res.json(bookings);
  });
});

router.post('/bookings', (req, res, next) => {
  let booking = req.body;
  console.log('booking in router', booking);

  if (booking.userName) {
    db.bookings.save(booking, (err, savedBooking) => {
      if (err) {
        res.send(err);
      }
      res.json(savedBooking);
    });
  } else {
    res.status(400);
    res.json({
      error: 'Your data is no good here.',
    });
  }
});

module.exports = router;
