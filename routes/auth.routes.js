const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')

// Login
router.get('/login', ensureLoggedOut(), (req, res) => {
  res.render('auth/login', { message: req.flash('error') })
})

router.post('/login', ensureLoggedOut(), passport.authenticate('local-login', {
  successRedirect: '/trip/list',
  failureRedirect: '/login',
  failureFlash: true
}))

//SignUp

router.get('/signup', ensureLoggedOut(), (req, res) => {
  res.render('auth/signup', { message: req.flash('error') })
})

router.post('/signup', ensureLoggedOut(), passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}))

//Logout
router.get('/logout', ensureLoggedIn('/login'), (req, res) => {
  req.logout()
  res.redirect('/')
})






module.exports = router