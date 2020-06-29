import axios from 'axios'

const config = require('dotenv').config()

console.log(config)

const CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/',
  V3: '3/',
  V4: '4/',
  API_KEY: 'c805c0fc229ce4fc81d777466eb08ba5'
}

const API = {
  genres: {
    list () {
      return axios.get(`${CONFIG.BASE_URL}${CONFIG.V3}genre/movie/list?api_key=${CONFIG.API_KEY}&language=en-US`)
    }
  },
  movies: {
    byCategory (categoryId) {
      return axios.get(`${CONFIG.BASE_URL}${CONFIG.V3}discover/movie?api_key=${CONFIG.API_KEY}&with_genres=${categoryId}`)
    }
  },
  movie: {
    details (movieID) {
      return axios.get(`${CONFIG.BASE_URL}${CONFIG.V3}movie/${movieID}?api_key=${CONFIG.API_KEY}&language=en-US`)
    },
    cast (movieID) {
      return axios.get(`${CONFIG.BASE_URL}${CONFIG.V3}movie/${movieID}/credits?api_key=${CONFIG.API_KEY}&language=en-US`)
    },
    search (term) {
      return axios.get(`${CONFIG.BASE_URL}${CONFIG.V3}search/movie?query=${term}&api_key=${CONFIG.API_KEY}&language=en-US`)
    }
  }
}

export default API
