const express = require('express')
const router = express.Router()

const Trip = require('../models/trip.models')

router.post('/', (req, res, next) => {
  const { originNeighb, destNeighb } = req.body

  Trip.find({ $and: [{ originNeighb: "Moratalaz" }, { destNeighb: "Carabanchel" }] })
    .then(trips => {
      console.log(trips)
      res.status(200).json({ trips });
    })
});

module.exports = router