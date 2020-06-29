// import state from './state'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'
import { reject } from 'lodash'

import API from './../../config/api'

export const NAMESPACE = 'MoviesStore'

export default {
  state: {
    movies: [],
    categories: []
  },
  mutations: {
    ADD_MOVIE: (state, payload) => {
      state.movies.push(payload)
    },
    REMOVE_MOVIE: (state, payload) => {
      state.movies = payload
    },
    LOAD_CATEGORIES: (state, payload) => {
      state.categories = payload
    }
  },
  actions: {
    addMovie: ({ commit, getters }, movie) => {
      // First an action has been called
      const alreadyAddedMovie = getters.isMovieAdded(movie)
      if (!alreadyAddedMovie) {
        // Then we fire the mutation
        // setTimeout(() => {
        commit('ADD_MOVIE', movie)
        // }, 2000)
      } else {
        alert('Movie already added')
      }
    },
    removeMovie: ({ state, commit }, movie) => {
      const filteredMovies = reject(state.movies, (el) => { return el.id === movie.id })
      commit('REMOVE_MOVIE', filteredMovies)
    },
    loadCategories: ({ state, commit }) => {
      if (state.categories.length === 0) {
        API.genres.list()
          .then((res) => {
            console.log('categories loaded!')
            commit('LOAD_CATEGORIES', res.data.genres)
          })
          .catch((error) => {
            console.log('error', error)
          })
      }
    }
  },
  getters: {
    isMovieAdded: (state) => {
      return movieId => state.movies.find(item => item.id === movieId)
    }
  }
}
