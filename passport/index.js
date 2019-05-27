const passport = require('passport');

require('./serializers.passport');
require('./localStr.passport');

module.exports = (app) => {
  app.use(passport.initialize())
  app.use(passport.session())
}