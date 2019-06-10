<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <div class="navbar-menu">
      <ul class="navbar-end">
        <b-field>
          <b-input 
            @keyup.native="enter"
            placeholder="Buscar"
            type="search"
            icon="magnify"
            class="has-background-transparent">
          </b-input>
        </b-field>

        <span class="navbar-end" v-if="!authenticated">
          <li class="navbar-item"><nuxt-link to="/"> Home </nuxt-link></li>
          <li class="navbar-item"> <a @click="isLogin = true">Login</a> </li>
        </span>

        <span class="navbar-end" v-else>
          <li class="navbar-item has-text-white-bis">Hola {{ user.name }}</li>
          <li class="navbar-item"><nuxt-link to="/dashboard"> Dashboard </nuxt-link></li>
          <li class="navbar-item"> <a @click="exit">Salir</a></li>
        </span>
      </ul>
    </div>

    <b-modal :active.sync="isLogin" has-modal-card>
        <form-login/>
    </b-modal>
  </nav>
</template>

<script>
import FormLogin from '~/components/FormLogin'
import { mapGetters } from 'vuex'
export default {
  components: {
    FormLogin
  },
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    async enter(e) {
      let input = e.target.value
      if(input.length > 3){
        await this.$store.dispatch('search_movie', input)
      }
    },
    exit() {
      this.$auth.logout()
    },
  },
  computed: {
    ...mapGetters(['auth/user'])
  },
}
</script>

<style>
  .navbar {
    padding: 0 5%;
    background: linear-gradient(to bottom,rgba(0, 0, 0, 0.6) 0,rgba(0, 0, 0, 0.45) 20%,rgba(0,0,0,0) 100%) !important;
  }
  .navbar a {
    color: white;
  }
  .navbar .navbar-brand a {
    color: #656565;
  }
  .navbar a:hover {
    background: none;
    color: #ec3f78;
  }
  .nav.navbar {
    background-color: white;
  }
  .has-background-transparent > input {
    background-color: transparent;
    border-top-color: #ffffff00;
    border-right-color: #ffffff00;
    border-bottom-color: white;
    border-left-color: #ffffff00;
    color: white;
    font-weight: 600;
  }
  .has-background-transparent > input::placeholder {
    color: white;
    font-weight: 600;
  }
  .has-background-transparent > input:focus, .has-background-transparent > input:active,  .has-background-transparent > input:hover{
    border-top-color: #ffffff00;
    border-right-color: #ffffff00;
    border-bottom-color: white;
    border-left-color: #ffffff00;
  }
</style>

