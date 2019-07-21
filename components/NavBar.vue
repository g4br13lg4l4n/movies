<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <div class="navbar-menu">
      <ul class="navbar-end">
        <li class="navbar-item"> 
           <b-dropdown hoverable aria-role="list">
            <button class="button is-black" slot="trigger">
                <span>Géneros</span>
                <b-icon icon="menu-down"></b-icon>
            </button>
            <div class="columns">
              <div class="column">
                 <b-dropdown-item 
                  @click="filterBy(item)"
                  aria-role="listitem" 
                  class="has-text-white"
                  v-for="(item, index) in tags" :key="index"
                  > {{ item }} 
                </b-dropdown-item>
              </div>
            </div>
        </b-dropdown>
        </li>
        <span class="navbar-end" v-if="!authenticated">
          <li class="navbar-item"><nuxt-link to="/"> Home </nuxt-link></li>
          <li class="navbar-item"> <a @click="isLogin = true">Login</a></li>
        </span>

        <span class="navbar-end" v-else>
          <li class="navbar-item has-text-white-bis">Hola {{ user.name }}</li>
          <li class="navbar-item"><nuxt-link to="/dashboard"> Dashboard </nuxt-link></li>
          <li class="navbar-item"> <a @click="exit">Salir</a></li>
        </span>

        <b-field>
          <b-input 
            @keyup.native="searching"
            @input="clear"
            placeholder="Buscar"
            v-model="inputSearch"
            type="search"
            icon="magnify"
            class="has-background-transparent">
          </b-input>
        </b-field>

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
import tags from '~/store/tags.json' 
export default {
  components: {
    FormLogin
  },
  data() {
    return {
      isLogin: false,
      inputSearch: '',
      tags: tags.tags
    }
  },
  methods: {
    async filterBy(tag) {
      await this.$store.dispatch('filter_movie', { tags: tag })
    },
    async clear(){
      if(this.inputSearch == ''){
        await this.$store.dispatch('get_movies')
      }
    },
    async searching() {
      let input = this.inputSearch
      if(input.length > 2){
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
  .dropdown-content {
    background-color: #FF0079 !important; 
  }
  .dropdown-content > a {
    font-weight: 600;
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

