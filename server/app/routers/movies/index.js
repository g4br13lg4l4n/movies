const movies = require('../../models/movies')
const upload = require('../../controllers/spaces')
const fs = require('fs')


module.exports = router => {
  // add new movie
  router.post('/movie', upload, async (req, res, next) => {

    let data = {
      ...req.body,
      tags: req.body.tags.split(','),
      url: req.files.video[0].location,
      poster: req.files.poster[0].location,
      image: req.files.image[0].location
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
      const resp = await movies.find({title: { $regex: new RegExp('.*' + req.query.title.toLowerCase(), "i") }})
      res.json(resp)
    } catch (e) {
      next(e)
    }
  })

  router.get('/movie/{token}')

  router.delete('/movies', async (req, res, next) => {
    try {
      let filenameUrl = `./uploads${req.query.url}`
      let filenamePoster = `./uploads${req.query.poster}`
      let filenameImage = `./uploads${req.query.image}`
      fs.unlinkSync(filenameUrl)
      fs.unlinkSync(filenamePoster)
      fs.unlinkSync(filenameImage)
      try {
        const resp = await movies.deleteMany(req.query)
        res.json(resp)
      } catch (e) {
        next (e)
      }
    } catch(e) {
      next (e)
    }
  })

}
