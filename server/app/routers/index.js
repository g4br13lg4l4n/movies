const express = require('express')
const router = express.Router()

movies = require('./movies/')
users = require('./users/')
views = require('./views/')
payments = require('./payments')

views(router)
movies(router)
users(router)
payments(router)

module.exports = router
