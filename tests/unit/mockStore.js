const state = {
  movies: [],
  currentMovie: ''
}
const mutations = {
  SET_MOVIES: jest.fn(),
  SET_CURRENT_MOVIE: jest.fn()
}
const actions = {
  searchMovies: jest.fn(),
  updateCurrentMovie: jest.fn()
}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
