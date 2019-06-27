// Load dependencies
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
  accessKeyId: 'LDDVFV3QH3KG5ZT23WE5',
  secretAccessKey: 'xTnbyV4cgCPEeNn5XXDxtmN2hcDHgFG2DO276Kdsf6o',
})

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint('sfo2.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint
})

const typeFile = (filename) => {
  return filename.split('.').pop();
}


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'movie-spaces',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      let type =  typeFile(file.originalname)
      if(file.fieldname == 'image' ||  file.fieldname == 'poster') {
        cb(null, 'images/' + Date.now() +'.'+ type)
      } else if(file.fieldname == 'video') {
        cb(null, 'videos/' + Date.now() +'.'+ type)
      } else {
        cb(null, 'uploads/' + Date.now() +'.'+ type)
      }
    }
  })
}).fields([{ name: 'poster', maxCount: 1 }, { name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }])

module.exports = upload