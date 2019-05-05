const users = require('../../models/users')
const passport = require('passport')
const jwt = require('jsonwebtoken')




module.exports = router => {
  // get users
  router.get('/users', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
      const resp = await users.find(req.query).select(['-password'])
      res.json(resp)
    } catch (e) {
      next(e)
    }
  })
  router.post('/users/signup', async (req, res, next) => {
    try {
      const user = new users(req.body)
      let resp = await user.save()
      res.json({ name: resp.name, email: resp.email })
    } catch (e) {
      next(e)
    }
  })

  router.post('/users/auth', async (req, res, next) => {
    passport.authenticate('auth', async (err, user, info) => {
      try {
        if(err || !user){ return res.status(401).json({message: 'No tiene credenciales válidas'}) }
        req.login(user, { session : false }, async (error) => {
          if( error ) return next(error)
          const body = { _id : user._id, email : user.email }
          const token = jwt.sign({ user : body }, 'kysCm1KDTILTJS0sWz0gcI7Me6NryYNq')
          return res.json({ token })
        })
      } catch (error) {
        return next(error);
      }
    })(req, res, next)
  })
}
