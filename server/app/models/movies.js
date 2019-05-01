const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movies = new Schema({
  title: {
    type: String,
    required: true,
    index: true
  },
  sipnosis: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true,
    index: true
  },
  tags: {
    type: Array,
    default: []
  },
  url: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true,
    default: 0
  },
  poster: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('movies', Movies)
