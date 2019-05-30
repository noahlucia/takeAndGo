const express = require('express')
const router = express.Router()

const Trip = require('../models/trip.models')

router.post('/', (req, res, next) => {
  const { originNeighb, destNeighb } = req.body
  console.log(originNeighb, destNeighb)
  console.log(typeof originNeighb, typeof destNeighb)
  Trip.find({ $and: [{ originNeighb: originNeighb }, { destNeighb: destNeighb }] })
    .populate("creatorID")
    .then(trips => {
      console.log(trips)
      res.status(200).json({ trips });
    })
});

module.exports = router