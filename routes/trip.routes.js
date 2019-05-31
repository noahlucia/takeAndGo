const express = require('express')
const router = express.Router()
const Trip = require('../models/trip.models')
const User = require('../models/user.models')

const isOwner = (req, trip) => {
  return trip.creatorID == req.user.id
}
const isLogged = (req) => req.user !== undefined


//añadir nuevo viaje

router.get('/add', (req, res) => res.render("trip/trip-add", { user: req.user }))
router.post('/add', (req, res) => {


  const { title, originNeighb, origin, destNeighb, destination, day, time, passengers, price, description, carType, maxPassengers } = req.body

  let smoker = req.body.smoker
  if (smoker === "on") smoker = true
  else smoker = false
  console.log(req.body)
  const creatorID = req.user.id
  const newTrip = new Trip({ creatorID, title, originNeighb, origin, destNeighb, destination, day, time, passengers, price, description, smoker, carType, maxPassengers })
  newTrip.save()
    .then(theTrip => res.redirect(`/trip/detail/${theTrip._id}`))
    .catch(error => console.log(error))
})


//ficha viaje

router.get('/detail/:trip_id', (req, res) => {

  Trip.findById(req.params.trip_id)
    .populate("passengers")
    .then(theTrip => {
      let day = theTrip.day.getDate()
      let month = theTrip.day.getMonth()
      let year = theTrip.day.getFullYear()

      let smoker = req.user.smoker
      if (req.user.smoker === true) smoker = "Sí"
      else smoker = "No"


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



router.get("/join/:trip_id", (req, res) => {

  Trip.findById({ _id: req.params.trip_id })
    .populate("passengers")
    .then(trip => {

      let day = trip.day.getDate()
      let month = trip.day.getMonth()
      let year = trip.day.getFullYear()

      let smoker = req.user.smoker
      if (req.user.smoker === true) smoker = "Sí"
      else smoker = "No"

      if (!(trip.passengers.some(passenger => passenger == req.user._id.toString())) && trip.passengers.length <= trip.maxPassengers) {
        //Añadir el usuario al viaje
        Trip.findByIdAndUpdate(
          { _id: req.params.trip_id },
          { $push: { passengers: req.user._id } })
          .then(x => {
            //Añadir el viaje al usuario
            User.findByIdAndUpdate(
              { _id: req.user._id },
              { $push: { myTrips: req.params.trip_id } }
            )
              .then(userUpdated => res.redirect(`/trip/detail/${req.params.trip_id}`))
          })

      } else {
        res.render('trip/trip-detail', {
          trip: trip,
          date: `${day}/${month}/${year}`,
          user: req.user,
          smoker,
          owner: isOwner(req, trip),
          message: "No cabes en este viaje"
        })
      }
    })
})



//editar
router.get('/edit/:trip_id', (req, res) => {
  Trip.findOne({ _id: req.params.trip_id })
    .then(trip => {
      res.render("trip/trip-edit", { trip, user: req.user })
    })
    .catch(error => console.log(error))
})

router.post('/edit/:trip_id', (req, res) => {
  const { title, neighbourhood, origin, destination, day, time, maxPassengers, price, description, smoker, carType } = req.body
  Trip.findByIdAndUpdate({ _id: req.params.trip_id }, { $set: { title, neighbourhood, origin, destination, day, time, maxPassengers, price, description, smoker, carType } }, { new: true })
    .then(() => res.redirect(`/trip/detail/${theTrip._id}`))
    .catch(error => console.log(error))
})


//lista de viajes
router.get('/list', (req, res, next) => {
  Trip.find()
    .populate("creatorID")
    .then(allTrips => {

      console.log(allTrips)
      res.render('trip/trip-list', { trips: allTrips, user: req.user })
    })
    .catch(error => console.log(error))
})



//delete
router.get('/delete/:trip_id', (req, res) => {
  Trip.findByIdAndRemove(req.params.trip_id)
    .then(theTrip => {
      console.log(req.params.trip_id)
      res.redirect('/trip/list')
    })
    .catch(error => console.log(error))
})


//join Trip

router.get("/myTrips/:id", (req, res) => {
  console.log(req.user.id)
  User.findById({ _id: req.user._id })
    .populate({ path: 'myTrips', populate: { path: 'creatorID' } })
    .then(user => {
      console.log(user.myTrips)
      res.render("trip/trip-myTrip", { trips: user.myTrips, user: req.user })
    })

})






module.exports = router 