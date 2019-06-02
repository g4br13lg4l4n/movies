const movies = require('../../models/movies')
const upFile = require('../../controllers/spaces')
const multer = require('multer')

const MAX_SIZE = 2000000

const imageFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']

  if(!allowedTypes.includes(file.mimetype)){
    const error = new Error('Archivo no permitido')
    error.code = "LIMIT_FILE_TYPES"
    return cb(error, false)
  }
  cb(null, true)
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: 
  storage, imageFilter,
  limits: { fileSize: MAX_SIZE }
})



module.exports = router => {
  // add new movie
  router.post('/movie',  upload.fields([{ name: 'poster', maxCount: 1 }]), async (req, res, next) => {
    console.log(req.body)
    res.json({file: req.body})
    /*
    try {
      console.log(req.body)

      let file = await upFile(req.body.poster, res)
      //const movie = new movies(req.body)
      //let resp = await movie.save()
      //

      res.json(file)
    } catch (e) {
      next (e)
    }*/
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
