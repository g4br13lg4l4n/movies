const views = require('../../models/views')
const Movies = require('../../models/movies')

module.exports = router => {
  router.post('/views', async (req, res, next) => {
    try {
      const view = new views(req.body)
      let resp = await view.save()
      res.json({ status: 'ok', resp })
    } catch (e) {
      next(e)
    }
  })

  router.post('/views-movies', async (req, res, next) => {
    try {
      const resp = await Movies.findById(req.body._id, function (err, movie) {
        movie.views = movie.views ? movie.views + 1 : 1
        movie.save()
      })
      res.json({ status: 'ok', resp })
    } catch (e) {
      next(e)
    }
  })
} 