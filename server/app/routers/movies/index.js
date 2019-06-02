const movies = require('../../models/movies')
const upload = require('../../controllers/spaces')


module.exports = router => {
  // add new movie
  router.post('/movie', upload, async (req, res, next) => {
    console.log(req.body)
    res.json({body: req.body, files: req.files})
  })

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
  router.delete('/movies', async (req, res, next) => {
    try {
      const resp = await movies.deleteMany(req.query)
      res.json(resp)
    } catch (e) {
      next (e)
    }
  })
}
