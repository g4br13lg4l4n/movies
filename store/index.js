import axios from 'axios'

// state
export const state = () => ({
  movies: [],
  users: [],
  errors: []
})

// mutations
export const mutations = {
  set_movies(state, movies) {
    state.movies = movies
  },
  set_users(state, users) {
    state.users = users
  },
  set_errors(state, errors){
    state.errors = errors
  }
}


// getters
export const getters = {
  movies(state) {
    return state.movies
  },
  users(state) {
    return state.users
  },
  errors(state) {
		return state.errors
	}
}

// actions
export const actions = {
  async get_movies ({ commit }) {
    const { data }  = await axios.get('http://localhost:3001/api/v1/movies')
    commit('set_movies', data)
  }
}
