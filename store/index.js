import api from '../plugins/api'
const qs = require('qs')
// state
export const state = () => ({
  movies: [],
  errors: [],
  movieSelected: [],
  playerOptions: {}
})

// mutations
export const mutations = {
  add_movie(state, movie) {
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
  set_movieSelected(state, movieSelected){
    state.movieSelected = movieSelected
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
  movieSelected(state) {
    return state.movieSelected
  },
  playerOptions(state) {
    return state.playerOptions
  }
}

// actions
export const actions = {
  async register_view_movie({ commit }, params) {
    await api.post(`views-movies`, params)
  },

  async register_view({ commit }, params) {
    await api.post(`views`, params)
  },

  async filter_movie({ commit }, params) {
    let qsParams = qs.stringify(params)
    let { data }  = await api.get(`movies?${qsParams}`) 
    let _data = data ? data : []
    commit('set_movies', _data)
  },

  async get_movie ({ commit }, params ) {
    let qsParams = qs.stringify(params)
    let { data }  = await api.get(`movies?${qsParams}`)
    commit('set_movieSelected', data)
  },

  async get_movies ({ commit }) {
    let { data }  = await api.get(`movies`)
    commit('set_movies', data)
  },

  async delete_movies({ commit }, params){
    let qsParams = qs.stringify(params)

    let { data } = await api.delete(`movies?${qsParams}`)
    if(data.deletedCount === 1 && data.ok === 1) {
      this.dispatch('get_movies')
    }
  },

  async search_movie({ commit }, params){
    let qsParams = qs.stringify({ title: params })
    let { data } = await api.get(`find-movies?${qsParams}`)
    let _data = data ? data : []

    commit('set_movies', _data)
  }
}
