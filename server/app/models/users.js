const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: false,
    unique: true,
    index: true
  },
  password:{
    type: String,
    required: false
  },
  isActive:{
    type: Boolean,
    required: false,
    default: true
  },created : {
    type: Date,
    default: Date.now
  },
  updated : {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('users', Users)
