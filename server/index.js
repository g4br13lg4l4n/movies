const mongoose = require('mongoose') // requerimos mongoose
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const consola = require('consola')
const app = express()
require('./app/auth')

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {

  let hostMongo, bdMongo, port, host

  if(config.dev){
    hostMongo = config.mongo.dev.host
    bdMongo = config.mongo.dev.bd
    port = config.server.dev.port
    host = config.server.dev.host
  }else {
    hostMongo = config.mongo.prod.host
    bdMongo = config.mongo.prod.bd
    port = config.server.prod.port
    host = config.server.prod.host
  }

  mongoose.connect(`mongodb://${hostMongo}/${bdMongo}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
  }) // Conexion a mongodb con mongoose
  .then(()=> {
    consola.ready({
      message: `conectado a mongoDB ${hostMongo}, BD: ${bdMongo}`,
      badge: true
    })
  }) // imprime conectado si hay exito en la conexion
  .catch( err => console.log(err)) // imprime el error si falla la conexion


  //middleware
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  
  //files
  app.use(express.static('uploads'))

  app.use((err, req, res, next) => {
    if(err.code === 'LIMIT_FILE_TYPES'){
      res.status(422).json({error: "Error en tipo de imágen"})
      return
    }

    if(err.code === 'LIMIT_FILE_SIZE'){
      res.status(422).json({error: `Archivo demasiado grande.`})
      return
    }
  })

  //routes
  const routes = require('./app/routers')
  app.use('/api/v1', [routes])

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
