const express = require('express')
const router = express.Router()

const Trip = require('../models/trip.models')

router.get('/', (req, res, next) => {
  Trip.find({}, (error, allTripsFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ trips: allTripsFromDB });
    }
  });
});

module.exports = router