const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Digital Films | Peliculas y series',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'peliculas, series, gratis, anime, ver'},
      { name: 'google-site-verification', content: 'bZDigLpajW54a_b8C3uFkMeJ6dcvZz9OhAhWLXD1kw0'},
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'description', content: pkg.description },
      { name: 'og:title', property:"og:title", content: pkg.description},


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
    middleware: ["clearValidationErrors"],
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  auth: {
    redirect: {
      callback: '/',
      login: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            token_type: "Bearer",
            url: "/users/auth",
            method: "post",
            propertyName: "token"
          },
          user: {
            url: "users/me",
            method: "get",
            propertyName: "data"
          },
          logout: {
            url: "users/logout",
            method: "get",
            redirect: '/'
          }
        },
      }
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  //  "./plugins/base/",
    "./plugins/mixins/user",
    "./plugins/mixins/validation",
    "./plugins/axios",
    "./plugins/vue-progressbar",
    "./plugins/fontawesome",
    { src: '~/plugins/VideoPlayer', ssr: false },
    { src: '~/plugins/toastr', ssr: false },
    { src: '~/plugins/paypal.js', ssr: false }
  ],

  axios: {
    baseURL: "http://digitalfilms.us:3001/api/v1/"
    //baseURL: "http://localhost:3001/api/v1/"
  },

  server: {
    prod: {
      host: 'digitalfilms.us',
      port: 3001
    },
    dev: {
      host: 'digitalfilms.us',
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
    '@nuxtjs/axios',
    '@nuxtjs/auth',
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
