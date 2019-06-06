<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <div class="navbar-menu">
      <ul class="navbar-end" v-if="!authenticated">
        <li class="navbar-item"><nuxt-link to="/"> Home </nuxt-link></li>
        <li class="navbar-item"> <a @click="isLogin = true">Login</a> </li>
      </ul>
      <ul class="navbar-end" v-else>
        <li class="navbar-item has-text-white-bis">Hola {{ user.name }}</li>
        <li class="navbar-item"> <a @click="exit">Salir</a></li>
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
    exit() {
      this.$auth.logout()
    },
  },
  computed: {
    ...mapGetters(['auth/user'])
  },
}
</script>

<style scoped>
  .navbar {
    padding: 0 5%;
    background: linear-gradient(to bottom,rgba(0, 0, 0, 0.6) 0,rgba(0, 0, 0, 0.45) 20%,rgba(0,0,0,0) 100%) !important;
  }
  .navbar a {
    color: white;
  }
  .navbar a:hover {
    background: none;
    color: #ec3f78;
  }
</style>

