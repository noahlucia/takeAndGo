const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')

// Login
router.get('/login', ensureLoggedOut(), (req, res) => {
  res.render('auth/login', { message: req.flash('error') });
})

router.post('/login', ensureLoggedOut(), passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

//SignUp

router.get('/signup', ensureLoggedOut(), (req, res) => {
  res.render('authentication/signup', { message: req.flash('error') });
});

router.post('/signup', ensureLoggedOut(), passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}))




module.exports = router