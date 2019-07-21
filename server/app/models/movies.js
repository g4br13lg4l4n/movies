const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Schema = mongoose.Schema

const Movies = new Schema({
  slug: {
    type: String,
    slug: "title",
    index: true
  },
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
  },
  views: {
    type: Number,
    default: 0,
    required: false
  },
  created : {
    type: Date,
    required: true,
    default: Date.now
  },
  updated : {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('movies', Movies)
