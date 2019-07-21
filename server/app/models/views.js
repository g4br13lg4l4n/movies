const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Views = new Schema({
  ip: {
    type: String,
    required: false
  },
  user: {
    type: String,
    required: true,
    index: true,
    default: 'anónimo'
  },
})

module.exports = mongoose.model('views', Views)
