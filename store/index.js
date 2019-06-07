import api from '../plugins/api'
// state
export const state = () => ({
  movies: [],
  errors: [],
  playerOptions: {}
})

// mutations
export const mutations = {
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
    const { data }  = await api.get(`movies`)
    commit('set_movies', data)
  }
}
