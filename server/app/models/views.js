const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Views = new Schema({
  ip: {
    type: String,
    required: false
  },
  data: {
    type: JSON,
    required: false
  },
  user: {
    type: String,
    required: true,
    index: true,
    default: 'anónimo'
  },
  created: {
    type: Date,
    index: true,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('views', Views)
