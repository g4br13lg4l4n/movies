const express = require('express')
const router = express.Router()

movies = require('./movies/')
users = require('./users/')
views = require('./views/')

views(router)
movies(router)
users(router)

module.exports = router
