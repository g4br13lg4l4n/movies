// Load dependencies
const multer = require('multer')

const typeFile = (filename) => {
  return filename.split('.').pop();
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(file.fieldname == 'image' ||  file.fieldname == 'poster'){
      cb(null, 'uploads/images')
    } else if(file.fieldname == 'video') {
      cb(null, 'uploads/videos')
    } else {
      cb(null, 'uploads')
    }
  },
  filename: function (req, file, cb) {
    let type =  typeFile(file.originalname)
    cb(null, Date.now() +'.'+ type)
  }
})

const upload = multer({
  storage,
}).fields([{ name: 'poster', maxCount: 1 }, { name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }])

module.exports = upload