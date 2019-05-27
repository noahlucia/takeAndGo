require('dotenv').config()
require('./config/mongoose.config')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const hbs = require('hbs')
const logger = require('morgan')
const flash = require('connect-flash')
const path = require('path')
const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)
const app = express()

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
require('./passport')(app)
app.use(flash());

// default value for title local
app.locals.title = 'Wellcome to Take&Go'

// Routing 
app.use('/', require('./routes/index.routes'))

const trips = require('./routes/trip.routes')
app.use('/trip', trips)




module.exports = app
