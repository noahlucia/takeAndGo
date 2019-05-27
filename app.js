require('dotenv').config()
const mongoose = require('./config/mongoose.config')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const hbs = require('hbs')
const logger = require('morgan')
const flash = require('connect-flash')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)
const app = express()

app.use(session({
  secret: 'tumblrlabdev',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// BodyParser
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Express View engine setup
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

// Passport
app.use(flash())
require('./passport')(app)

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator'

// Routing 
app.use('/', require('./routes/index.routes'))
app.use('/', require('./routes/auth.routes'))
app.use('/', require('./routes/user.routes'))





module.exports = app
