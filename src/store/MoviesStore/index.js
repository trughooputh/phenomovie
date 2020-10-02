import API from '@/config/api'

export const NAMESPACE = 'MoviesStore'

export default {
  state: {
    movies: [],
    currentMovie: {}
  },
  mutations: {
    SET_MOVIES: (state, payload) => {
      state.movies = payload
    },
    SET_CURRENT_MOVIE: (state, payload) => {
      state.currentMovie = payload
    }
  },
  actions: {
    searchMovies: async ({ commit }, search) => {
      if (search) {
        await API.movie.search(search)
          .then((res) => {
            res.data.Search
              ? commit('SET_MOVIES', res.data.Search)
              : commit('SET_MOVIES', [])
          })
          .catch((error) => {
            console.log('error', error)
          })
      }
    },
    updateCurrentMovie: async ({ commit }, id) => {
      if (id) {
        commit('SET_CURRENT_MOVIE', {})
        await API.movie.details(id)
          .then((res) => {
            commit('SET_CURRENT_MOVIE', res.data)
          })
          .catch((error) => {
            console.log('error', error)
          })
      }
    }
  },
  getters: {}
}
