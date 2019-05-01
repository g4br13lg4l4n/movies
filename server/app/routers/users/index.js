const users = require('../../models/users')

module.exports = router => {
  // get users
  router.get('users', async (req, res, next) => {
    try {
      const resp = await users.find(req.query)
      res.json(resp)
    } catch (e) {
      next(e)
    }
  })

  router.post('user', async (req, res, next) => {
    try {
      const _users = new users(req.body)
      let resp = await _users.save()
      res.json(resp)
    } catch (e) {
      next(e)
    }
  })

  router.post('user/auth', async (req, res, next) => {
    try {
      const resp = await users.findOne(req)
      res.json(resp)
    } catch (e) {
      next(e)
    }
  })
}
