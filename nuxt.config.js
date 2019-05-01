const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Middleware router
  */
  router: {
    //middleware: ['auth']
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/VideoPlayer', ssr: false },
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "http://localhost:3001/"
  },

  server: {
    prod: {
      host: 'localhost',
      port: 3001
    },
    dev: {
      host: 'localhost',
      port: 3001
    }
  },

  mongo: {
    prod: {
      host: 'localhost',
      bd: 'movies'
    },
    dev: {
      host: 'localhost',
      bd: 'movies'
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
}
