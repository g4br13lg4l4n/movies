const movies = require('../../models/movies')
const upload = require('../../controllers/spaces')


module.exports = router => {
  // add new movie
  router.post('/movie', upload, async (req, res, next) => {
    let data = {
      ...req.body,
      url: (req.files.video[0].path).replace('uploads',''),
      poster: (req.files.poster[0].path).replace('uploads',''),
      image: (req.files.image[0].path).replace('uploads','')
    }
    try {
      const movie = new movies(data)
      let resp = await movie.save()
      res.json(resp)
    } catch (error) {
      next(e)
    }
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

  router.get('/movie/{token}')

  router.delete('/movies', async (req, res, next) => {
    console.log('req.query', req.query)
    try {
      const resp = await movies.deleteMany(req.query)
      res.json(resp)
    } catch (e) {
      next (e)
    }
  })

}
