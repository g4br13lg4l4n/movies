import api from '../plugins/api'
const qs = require('qs')
// state
export const state = () => ({
  movies: [],
  errors: [],
  playerOptions: {}
})

// mutations
export const mutations = {
  add_movie(state, movie) {
    console.log('ehntrara')
    state.movies.push(movie)
    state.movies = state.movies
  },
  set_movies(state, movies) {
    state.movies = movies
  },
  set_user(state, user) {
    state.user = user
  },
  set_errors(state, errors){
    state.errors = errors
  },
  set_playerOptions(state, options){
    state.playerOptions = options
  },
  set_authenticated(state, options){
    state.authenticated = options
  }
}

// getters
export const getters = {
  authenticated(state) {
		return state.auth.loggedIn
  },
	user(state) {
		return state.auth.user
	},
  movies(state) {
    return state.movies
  },
  errors(state) {
		return state.errors
  },
  playerOptions(state) {
    return state.playerOptions
  }
}

// actions
export const actions = {
  async get_movies ({ commit }) {
    let { data }  = await api.get(`movies`)
    commit('set_movies', data)
  },
  async delete_movies({ commit }, params){
    let qsParams = qs.stringify(params)
    let { data } = await api.delete(`movies?${qsParams}`)
    if(data.deletedCount === 1 && data.ok === 1){
      this.dispatch('get_movies')
    }
  }
}
