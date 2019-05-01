const movies = require('../../models/movies')

module.exports = router => {
  // get by category
  router.get('/movies', async (req, res, next) => {
    try {
      const resp = await movies.find(req.query)
      res.json(resp)
    } catch (e) {
      next(e)
    }
  })
  // find movie with like
  router.get('/find-movies', async (req, res, next) => {
    try {
      const resp = await movies.findOne({title: { $regex: '.*' + req.query.title + '.*' }})
      res.json(resp)
    } catch (e) {
      next(e)
    }
  })

  router.post('/movie', async (req, res, next) => {
    try {
      const movie = new movies(req.body)
      let resp = await movie.save()
      res.json(resp)
    } catch (e) {
      next (e)
    }
  })
}
