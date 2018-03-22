const express = require('express');
const router = express.Router();
const mongoJS = require('mongojs');

const db = mongoJS(
  'mongodb://beelarr:123456@ds215089.mlab.com:15089/ivasap-mobile',
  ['nursesLocation']
);

// Get for nearby nurse

router.get('/nurseLocation', (req, res, next) => {
  db.nursesLocation.ensureIndex({ coordinate: '2dsphere' });
  db.nursesLocation.find(
    {
      coordinate: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [
              parseFloat(req.query.longitude),
              parseFloat(req.query.latitude),
            ],
          },
          $maxDistance: 10000,
        },
      },
    },
    (err, location) => {
      if (err) {
        res.send(err);
      } else {
        res.send(location);
      }
    }
  );
});

// Update Nurse's socket id

router.put('/nurseLocationSocket/:id', (req, res, next) => {
  let io = req.app.io;
  if (req.body) {
    db.nursesLocation.update(
      { _id: mongoJS.ObjectID(req.params.id) },
      { $set: { socketId: req.body.socketId } },
      (err, updateDetails) => {
        if (err) {
          res.send(err);
        } else {
          res.send(updateDetails);
        }
      }
    );
  } else {
    res.status(400);
    res.json({
      error: `Houston we have a problem. ${req.body}`,
    });
  }
});

// Test get

router.get('/nurseLocationSocket/:id', (req, res, next) => {
  db.nursesLocation.find((err, nurseLocation) => {
    if (err) {
      res.send(err);
    }
    res.json(nurseLocation);
  });
});

module.exports = router;
