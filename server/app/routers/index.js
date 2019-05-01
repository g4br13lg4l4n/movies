const express = require('express')
const router = express.Router()

movies = require('./movies')
users = require('./users')
movies(router)
users(router)

module.exports = router
