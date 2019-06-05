const localStrategy = require('passport-local').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const JWTstrategy = require('passport-jwt').Strategy
const passport = require('passport')
const users = require('../models/users')


passport.use('auth', new localStrategy({
  usernameField : 'email',
  passwordField : 'password'
  }, async (email, password, done) => {
    try {
      const user = await users.findOne({ email })
      if( !user ){
        return done(null, false, { message : 'usuario o contraseña incorrecta'});
      }
      const validate = await user.isValidPassword(password);
      if( !validate ){
        return done(null, false, { message : 'usuario o contraseña incorrecta'});
      }
      return done(null, user, { message : 'Ok', user});
    } catch (error) {
      return done(error);
    }
}))

passport.use('jwt', new JWTstrategy({
  secretOrKey : 'kysCm1KDTILTJS0sWz0gcI7Me6NryYNq',
  jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken('secret_token')
  }, async (token, done) => {
    try {
      return done(null, token.user);
    } catch (error) {
      done(error)
    }
}))

