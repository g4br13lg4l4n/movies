const express = require('express')
const router = express.Router()

movies = require('./movies')

movies(router)

module.exports = router
