const express = require('express')
const router = express.Router()


const Trip = require('../models/trip.models')

const isOwner = (req, trip) => {
  return trip.creatorID == req.user.id
}
const isLogged = (req) => req.user !== undefined


//añadir nuevo viaje

router.get('/add', (req, res) => res.render("trip/trip-add"))
router.post('/add', (req, res) => {

  const { title, originNeighb, origin, destNeighb, destination, day, time, passengers, price, description, carType } = req.body

  let smoker = req.body.smoker
  if (smoker === "on") smoker = true
  else smoker = false

  const creatorID = req.user.id
  const newTrip = new Trip({ creatorID, title, originNeighb, origin, destNeighb, destination, day, time, passengers, price, description, smoker, carType })
  newTrip.save()
    .then(theTrip => res.redirect(`/trip/detail/${theTrip._id}`))
    .catch(error => console.log(error))
})


//ficha viaje

router.get('/detail/:trip_id', (req, res) => {

  Trip.findById(req.params.trip_id)
    .populate("Comment")
    .then(theTrip => {
      let day = theTrip.day.getDate()
      let month = theTrip.day.getMonth()
      let year = theTrip.day.getFullYear()

      let smoker = req.user.smoker
      if (req.user.smoker === true) smoker = "Sí"
      else smoker = "No"

      console.log(isOwner(req, theTrip))
      res.render('trip/trip-detail', {
        trip: theTrip,
        date: `${day}/${month}/${year}`,
        user: req.user,
        smoker,
        owner: isOwner(req, theTrip)
      })
    })
    .catch(error => console.log(error))
})


//editar
router.get('/edit/:trip_id', (req, res) => {

  Trip.findOne({ _id: req.params.trip_id })
    .then(trip => {
      res.render("trip/trip-edit", { trip })
    })
    .catch(error => console.log(error))
})

router.post('/edit/trip_id', (req, res) => {
  const { title, neighbourhood, origin, destination, day, time, passengers, price, description, smoker, carType } = req.body

  Trip.findByIdAndUpdate({ _id: req.params.trip_id }, { $set: { title, neighbourhood, origin, destination, day, time, passengers, price, description, smoker, carType } })
    .then(() => res.redirect(`/trip/detail/${theTrip._id}`))
    .catch(error => console.log(error))

})

//lista de viajes
router.get('/list', (req, res, next) => {
  Trip.find()
    .then(allTrips => {
      res.render('trip/trip-list', { trips: allTrips })
    })
    .catch(error => console.log(error))
})



//delete
router.post('/delete/:trip_id', (req, res) => {
  Trip.findByIdAndRemove(req.params.trip_id)
    .then(theTrip => {
      res.redirect('/trip/list')
    })
    .catch(error => console.log(error))
})




module.exports = router 