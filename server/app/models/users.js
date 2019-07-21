const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
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
  isAdmin:{
    type: Boolean,
    default: false,
    required: false,
  },
  isActive:{
    type: Boolean,
    required: false,
    default: true
  },
  created : {
    type: Date,
    default: Date.now
  },
  updated : {
    type: Date,
    default: Date.now
  }
})

Users.pre('save', async function( next ){ // before save the password bcrypt the password
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash
  next()
})

Users.methods.isValidPassword = async function( password ){
  return compare = await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('users', Users)
