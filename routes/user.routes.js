const user = require('../models/user.models')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const bcryptSalt = 10
const cloudinaryConfig = require('../config/cloudinary.config')

//User edit 
router.get('/edit/:id', (req, res) => {
  const id = req.params.id
  user.findById(id)
    .then(resp => res.render('user/edit', { user: resp }))
    .catch(err => console.log(err))

})

router.post('/edit/:id', cloudinaryConfig.single('photo'), (req, res, next) => {
  const { username, email, firstName, lastName, homeAddress, workAddress, phone, imgName, imgPath } = req.body
  const newPassword = req.body.password
  const id = req.params.id



  console.log(req.body)
  user.findByIdAndUpdate(id, {
    username,
    email,
    firstName,
    lastName,
    homeAddress,
    workAddress,
    phone,
  }, { new: true })



    .then(updatedUser => {
      if (newPassword) {
        console.log("hola---------------", bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10)))
        user.findByIdAndUpdate(updatedUser.id, {
          password: bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10))
        }, { new: true })
          .then(res.redirect("/"))
          .catch(err => console.log(err))
      } else {
        res.redirect('/')
      }
      console.log('Update success:', update)
    })
    .catch(err => console.log('error', err))
})


module.exports = router